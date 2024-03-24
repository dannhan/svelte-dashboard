import type { Actions, PageServerLoad, RequestEvent } from './$types';
import { initializePostAssignmentForm } from '$lib/forms/initiator';
import { postAssignmentFormHandler } from '$lib/forms/handler/assignment';

export const load: PageServerLoad = async ({ url }) => {
  const updateDataId = parseInt(url.searchParams.get('id') || "-1");

  return {
    updateDataId,
    postAssignmentForm: await initializePostAssignmentForm()
  };
};

export const actions: Actions = {
  default: async (event: RequestEvent) => postAssignmentFormHandler(event)
};
