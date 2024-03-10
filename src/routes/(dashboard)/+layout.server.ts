import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../(dashboard)/$types';
import { getProjects } from '$lib/firebase';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { projectSchema, logoutSchema } from '$lib/schema';

export const load: LayoutServerLoad = async ({ params }) => {
  const projects = await getProjects();

  if (params.project === 'placeholder') redirect(308, `/${projects[0]}/identitas-proyek`);
  if (projects.findIndex((project) => project === params.project) === -1)
    error(404, 'Page tidak ditemukan');

  return {
    projects,
    projectForm: await superValidate(zod(projectSchema)),
    logoutForm: await superValidate(zod(logoutSchema))
  };
};
