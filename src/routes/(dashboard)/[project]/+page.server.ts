import type { Actions } from './$types';
import { postProjectFormHandler, deleteProjectFormHandler } from '$lib/forms/handler/projects';
import { deleteAuthenticationHandler } from '$lib/forms/handler/authentications';

export const actions: Actions = {
  create: async (event) => postProjectFormHandler(event),
  delete: async (event) => deleteProjectFormHandler(event),
  logout: async (event) => deleteAuthenticationHandler(event)
};
