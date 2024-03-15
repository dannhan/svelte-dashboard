import { projectIdentityForm } from '$lib/forms/validator';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  // todo
  return { projectIdentityForm: projectIdentityForm() };
};
