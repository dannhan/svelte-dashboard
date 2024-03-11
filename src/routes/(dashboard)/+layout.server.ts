import type { LayoutServerLoad } from '../(dashboard)/$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { projectSchema, logoutSchema, deleteProjectSchema } from '$lib/schema';

export const load: LayoutServerLoad = async () => {
  return {
    projectForm: await superValidate(zod(projectSchema)),
    deleteProjectForm: await superValidate(zod(deleteProjectSchema)),
    logoutForm: await superValidate(zod(logoutSchema))
  };
};
