import type { Actions, PageServerLoad } from './$types';
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schema';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema))
  };
};

export const actions: Actions = {
  login: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(loginSchema));
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
    redirect(303, '/placeholder/identitas-proyek');
  },
  logout: async ({ cookies }) => {
    cookies.set('session', '', {
      path: '/',
      expires: new Date(0)
    });
    redirect(303, '/');
  }
};
