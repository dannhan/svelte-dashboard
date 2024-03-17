import { type Actions } from '@sveltejs/kit';
import { postDesignImageFormHandler } from '$lib/forms/handler/images';

export const actions: Actions = {
  default: async (event) => await postDesignImageFormHandler(event)
};
