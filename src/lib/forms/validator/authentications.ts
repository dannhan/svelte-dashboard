import type { RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { postAuthenticationSchema } from '$lib/schema';

export const AuthenticationsValidator = {
  validatePostAuthenticationPayload: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(postAuthenticationSchema));

    return form;
  }
};
