import type { Actions, PageServerLoad } from './$types';
import { type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schema';
import { loginFormHandler } from '$lib/forms/handler';

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginSchema))
  };
};

export const actions: Actions = {
  default: async (event: RequestEvent) => await loginFormHandler(event)
};
