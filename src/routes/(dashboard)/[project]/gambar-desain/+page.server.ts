import { type Actions } from '@sveltejs/kit';
import { uploadDesignImageFormHandler } from '$lib/forms/handler';

export const actions: Actions = {
  default: async (event) => await uploadDesignImageFormHandler(event)
};
