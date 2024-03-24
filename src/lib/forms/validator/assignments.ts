import type { RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { postAssignmentSchema } from '$lib/schema';

export const AssignmentsValidator = {
  validatePostAssignmentPayload: async (event: RequestEvent) => {
    const form = await superValidate(event, zod(postAssignmentSchema));

    return form;
  }
};
