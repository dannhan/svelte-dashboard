import { getProjects } from '$lib/server/firebase';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ locals }) => {
  if (locals.isLogin) return;

  return { projects: locals.projects };
};
