import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { AuthenticationsValidator } from '$lib/forms/validator/authentications';

export async function postAuthenticationHandler(event: RequestEvent) {
  const form = await AuthenticationsValidator.validatePostAuthenticationPayload(event);
  const password = form.data.password;

  if (!form.valid) {
    return fail(400, { form });
  }

  if (password !== 'admin') {
    form.errors = { password: ['Password salah. Silakan coba lagi.'] };
    return fail(400, { form });
  }

  // todo
  const token = password;
  event.cookies.set('session', `${token}`, {
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 // 1 day
  });

  return { form };
}

export async function deleteAuthenticationHandler(event: RequestEvent) {
  event.cookies.set('session', '', {
    path: '/',
    expires: new Date(0)
  });

  redirect(303, '/');
}
