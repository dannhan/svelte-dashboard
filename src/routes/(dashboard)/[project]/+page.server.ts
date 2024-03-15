import type { Actions } from './$types';
import {
  addProjectFormHandler,
  deleteProjectFormHandler,
  logoutFormHandler
} from '$lib/forms/handler';

export const actions: Actions = {
  create: async (event) => addProjectFormHandler(event),
  delete: async (event) => deleteProjectFormHandler(event),
  logout: async (event) => logoutFormHandler(event)
};
