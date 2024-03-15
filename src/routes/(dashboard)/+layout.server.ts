import type { LayoutServerLoad } from './$types';
import { addProjectForm, deleteProjectForm, logoutForm } from '$lib/forms/validator';

export const load: LayoutServerLoad = async () => {
  return {
    projectForm: await addProjectForm(),
    deleteProjectForm: await deleteProjectForm(),
    logoutForm: await logoutForm()
  };
};
