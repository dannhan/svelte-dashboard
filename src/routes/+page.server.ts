import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { loginSchema } from '$lib/schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema))
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginSchema));
    if (!form.valid) {
      return fail(400, {
        form
      });
    }

    // todo: implement proper login
    const password = form.data.password;
    if (password !== 'admin') {
      return fail(400, { incorrect: true });
    }

    redirect(303, '/identitas-proyek');
  }
};
