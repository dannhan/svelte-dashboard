import { type RequestEvent } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import { initializeLoginForm } from '$lib/forms/initiator';
import { postAuthenticationHandler } from '$lib/forms/handler/authentications';

export const load: PageServerLoad = async () => {
  return {
    form: await initializeLoginForm()
  };
};

export const actions: Actions = {
  default: async (event: RequestEvent) => await postAuthenticationHandler(event)
};
