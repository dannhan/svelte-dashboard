import type { PageServerLoad } from './$types';
import { initializeProjectIdentityForm } from '$lib/forms/initiator';

export const load: PageServerLoad = async () => {
  return {
    projectIdentityForm: await initializeProjectIdentityForm()
  };
};
