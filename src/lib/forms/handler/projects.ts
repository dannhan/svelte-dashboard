import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { addProject, deleteProject } from '$lib/server/firebase';
import { ProjectsValidator } from '$lib/forms/validator/projects';

export async function postProjectFormHandler(event: RequestEvent) {
  const form = await ProjectsValidator.validatePostProjectPayload(event);

  if (!form.valid) {
    return fail(400, { form });
  }

  const projectName = form.data.name.toLowerCase();
  const projectType = form.data.type.toLowerCase();
  await addProject(projectName, projectType);

  redirect(303, `/${projectName}/identitas-proyek`);
}

export async function deleteProjectFormHandler(event: RequestEvent) {
  const form = await ProjectsValidator.validateDeleteProjectPayload(event);

  if (!form.valid) {
    return fail(400, { form });
  }

  const projectName = form.data.name;
  // todo
  if (projectName === event.params.project) return { form };

  await deleteProject(projectName);

  return { form };
}
