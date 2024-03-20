import type { PageServerLoad } from './$types';
import { initializePostAssignmentForm } from '$lib/forms/initiator';

export const load: PageServerLoad = async () => {
  return {
    postAssignmentForm: await initializePostAssignmentForm()
  };
};
