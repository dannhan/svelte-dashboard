import { getProjects } from '$lib/server/firebase';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const isLoginPage = event.url.pathname === '/login';
  const isSessionPresent = event.cookies.get('session');

  // todo: check if authenticated here
  if (!isSessionPresent && !isLoginPage) throw redirect(303, '/login');
  if (isLoginPage) event.locals.isLogin = true;

  const projectPage =  event.params.project ;
  const isMethodGET = event.request.method === 'GET';
  if (projectPage && isMethodGET) {
    event.locals.projects = await getProjects();
  }

  return resolve(event);
};
