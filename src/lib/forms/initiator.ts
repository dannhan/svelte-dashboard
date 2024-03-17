import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import {
  postAuthenticationSchema,
  deleteAuthenticationSchema,
  postProjectSchema,
  deleteProjectSchema,
  projectIdentitySchema
} from '$lib/schema';

export const initializeLoginForm = async () => await superValidate(zod(postAuthenticationSchema));
export const initializeLogoutForm = async () => await superValidate(zod(deleteAuthenticationSchema));
export const initializePostProjectForm = async () => await superValidate(zod(postProjectSchema));
export const initializeDeleteProjectForm = async () => await superValidate(zod(deleteProjectSchema));
export const initializeProjectIdentityForm = async () => await superValidate(zod(projectIdentitySchema));
