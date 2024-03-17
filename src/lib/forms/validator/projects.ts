import type { RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { deleteProjectSchema, postProjectSchema } from '$lib/schema';

export const ProjectsValidator = {
  validatePostProjectPayload: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(postProjectSchema));

    return form;
  },
  validateDeleteProjectPayload: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(deleteProjectSchema));

    return form;
  }
};
