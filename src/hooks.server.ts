import { getProjects } from '$lib/server/firebase';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  /* redirect user to login page if not authenticated */
  const isSessionPresent = event.cookies.get('session'); // todo: check if authenticated here
  const isLoginPage = event.url.pathname === '/login';

  if (!isSessionPresent && !isLoginPage) throw redirect(303, '/login');
  if (isLoginPage) event.locals.isLogin = true;

  /* redirect user to first project page if authenticated and if user access root or login page*/
  const projectPage = event.params.project;
  const isMethodGET = event.request.method === 'GET';

  if (isMethodGET) {
    if (projectPage) {
      if (event.url.pathname.endsWith(projectPage)) {
        throw redirect(303, `/${projectPage}/identitas-proyek`);
      }

      if (isSessionPresent) {
        event.locals.projects = await getProjects();
      }
    }

    if (!projectPage && isSessionPresent) {
      const firstProject = event.locals.projects?.length ? event.locals.projects[0] : '-';
      throw redirect(303, `/${firstProject}/identitas-proyek`);
    }
  }

  return resolve(event);
};
