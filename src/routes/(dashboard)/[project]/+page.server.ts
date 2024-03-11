import type { Actions, PageServerLoad } from './$types';
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { createProject, deleteProject } from '$lib/server/firebase';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { deleteProjectSchema, projectSchema } from '$lib/schema';

export const load: PageServerLoad = async ({ params }) => {
  redirect(303, `${params.project}/identitas-proyek`);
}

export const actions: Actions = {
  create: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(projectSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    const projectName = form.data.name.toLowerCase();
    await createProject(projectName);

    redirect(303, `/${projectName}/identitas-proyek`);
  },
  delete: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(deleteProjectSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    const projectName = form.data.name;
    await deleteProject(projectName);

    return { form };
  },
  logout: async ({ cookies }) => {
    cookies.set('session', '', {
      path: '/',
      expires: new Date(0)
    });
    redirect(303, '/');
  }
};
