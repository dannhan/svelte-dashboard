import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { projectSchema, logoutSchema } from '$lib/schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { getProjects } from '$lib/firebase';

export const load: LayoutServerLoad = async ({ params }) => {
	const projects = await getProjects();

	if (params.project === 'placeholder') redirect(308, `${projects[0]}/identitas-proyek`);

	return {
		projects,
		projectForm: await superValidate(zod(projectSchema)),
		logoutForm: await superValidate(zod(logoutSchema))
	};
};
