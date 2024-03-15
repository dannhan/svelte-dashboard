import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import {
  deleteProjectSchema,
  loginSchema,
  projectIdentitySchema,
  projectSchema
} from '$lib/schema';
import { addProject, deleteProject, uploadDesignImage } from '$lib/server/firebase';

/*********************** authentications handler **********************/
export async function loginFormHandler(event: RequestEvent) {
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

  return { form };
}

export async function logoutFormHandler(event: RequestEvent) {
  event.cookies.set('session', '', {
    path: '/',
    expires: new Date(0)
  });
  redirect(303, '/');
}
/*********************** authentications handler **********************/

/*********************** projects handler **********************/
export async function addProjectFormHandler(event: RequestEvent) {
  const form = await superValidate(event, zod(projectSchema));
  if (!form.valid) {
    return fail(400, { form });
  }

  const projectName = form.data.name.toLowerCase();
  const projectType = form.data.type.toLowerCase();
  await addProject(projectName, projectType);

  redirect(303, `/${projectName}/identitas-proyek`);
}

export async function deleteProjectFormHandler(event: RequestEvent) {
  const form = await superValidate(event, zod(deleteProjectSchema));
  if (!form.valid) {
    return fail(400, { form });
  }

  const projectName = form.data.name;
  // todo
  if (projectName === event.params.project) return { form };

  await deleteProject(projectName);

  return { form };
}
/*********************** projects handler **********************/

/*********************** project identity handler **********************/
export async function addProjectIdentityFormHandler(event: RequestEvent) {
  const form = await superValidate(event, zod(projectIdentitySchema));

  if (!form.valid) {
    return fail(400, { form });
  }
}

export async function deleteProjectIdentityFormHandler(event: RequestEvent) {
  const form = await superValidate(event, zod(projectIdentitySchema));

  if (!form.valid) {
    return fail(400, { form });
  }
}
/*********************** project identity handler **********************/

/*********************** design images handler **********************/
export async function uploadDesignImageFormHandler(event: RequestEvent) {
  const formData = Object.fromEntries(await event.request.formData());

  if (
    !(formData.fileToUpload as File).name ||
    (formData.fileToUpload as File).name === 'undefined'
  ) {
    return fail(400, {
      error: true,
      message: 'You must provide a file to upload'
    });
  }

  const { fileToUpload } = formData as { params: string; fileToUpload: File };

  const params = event.url.pathname.split('/')[1];

  await uploadDesignImage(params, fileToUpload);

  return { success: true };
}
/*********************** design images handler **********************/
