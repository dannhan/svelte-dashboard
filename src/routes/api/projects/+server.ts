import { json } from '@sveltejs/kit';
import { getProjects, deleteProject, createProject } from '$lib/firebase';
import { actionResult, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { projectSchema } from '$lib/schema';

export async function GET() {
	const projects = await getProjects();

	return json(projects);
}

export async function DELETE({ request }: { request: Request }) {
	const formData = await request.formData();
	const project = formData.get('project') as string;

	if (!project) return json({ success: false, message: 'Payload incorrect' });

	await deleteProject(project);

	return json({ success: true });
}

export async function POST({ request }: { request: Request }) {
	const form = await superValidate(request, zod(projectSchema));
	if (!form.valid) return actionResult('failure', { form });

	const projectName = form.data.name.toLowerCase();
	await createProject(projectName);

	return actionResult('success', { form }, 200);
}
