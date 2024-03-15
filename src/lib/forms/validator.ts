import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import {
  projectSchema,
  logoutSchema,
  deleteProjectSchema,
  projectIdentitySchema
} from '$lib/schema';

export const logoutForm = async () => await superValidate(zod(logoutSchema));
export const addProjectForm = async () => await superValidate(zod(projectSchema));
export const deleteProjectForm = async () => await superValidate(zod(deleteProjectSchema));
export const projectIdentityForm = async () => await superValidate(zod(projectIdentitySchema));
