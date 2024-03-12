import { getProjects } from '$lib/server/firebase';
import { redirect, type Handle, error } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  /* redirect user to login page if not authenticated */
  const isSessionPresent = event.cookies.get('session'); // todo: check if authenticated here
  const isLoginPage = event.url.pathname === '/';

  if (!isSessionPresent && !isLoginPage) throw redirect(303, '/');
  if (isLoginPage) event.locals.isLogin = true;

  /* redirect user to first project page if authenticated and if user login page  */
  const projectPage = event.params.project;
  const isMethodGET = event.request.method === 'GET';

  if (isMethodGET) {
    if (projectPage || isSessionPresent) {
      event.locals.projects = await getProjects();
    }

    if (isLoginPage && isSessionPresent) {
      const firstProject = event.locals.projects && event.locals.projects[0];
      throw redirect(303, `/${firstProject}/identitas-proyek`);
    }
  }

  // todo: throw proper error
  // if (event.locals.projects?.findIndex((project) => project === projectPage) === -1) {
  //   throw error(404, 'not found');
  // }

  return resolve(event);
};
