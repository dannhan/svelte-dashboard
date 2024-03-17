import type { LayoutServerLoad } from './$types';
import {
  initializePostProjectForm,
  initializeDeleteProjectForm,
  initializeLogoutForm
} from '$lib/forms/initiator';

export const load: LayoutServerLoad = async () => {
  return {
    projectForm: await initializePostProjectForm(),
    deleteProjectForm: await initializeDeleteProjectForm(),
    logoutForm: await initializeLogoutForm()
  };
};
