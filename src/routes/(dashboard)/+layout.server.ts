import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../(dashboard)/$types';
import { getProjects } from '$lib/server/firebase';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { projectSchema, logoutSchema, deleteProjectSchema } from '$lib/schema';

export const load: LayoutServerLoad = async ({ params }) => {
  const projects = await getProjects();

  if (projects.findIndex((project) => project === params.project) === -1) {
    error(404, 'Page tidak ditemukan');
  }

  // todo: is it possible to add data into form?
  return {
    projects,
    projectForm: await superValidate(zod(projectSchema)),
    deleteProjectForm: await superValidate(zod(deleteProjectSchema)),
    logoutForm: await superValidate(zod(logoutSchema))
  };
};
