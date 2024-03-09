import { json } from '@sveltejs/kit';
import { getProjects, deleteProject, createProject } from '$lib/firebase';

export async function GET() {
  const projects = await getProjects("from api/projects/+server.ts");

  return json(projects);
}

export async function DELETE({ request }: { request: Request }) {
  const formData = await request.formData();
  const project = formData.get('project') as string;

  await deleteProject(project);

  return json({ success: true });
}

export async function POST({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = (formData.get('name') as string)?.toLowerCase();
  const type = formData.get('type');

  await createProject(name);

  return json({ name, type });
}
