import { g as getProjects } from "./index7.js";
import { r as redirect, e as error } from "./index.js";
const handle = async ({ event, resolve }) => {
  const isSessionPresent = event.cookies.get("session");
  const isLoginPage = event.url.pathname === "/";
  if (!isSessionPresent && !isLoginPage)
    throw redirect(303, "/");
  if (isLoginPage)
    event.locals.isLogin = true;
  const projectPage = event.params.project;
  const isMethodGET = event.request.method === "GET";
  if (isMethodGET) {
    if (projectPage || isSessionPresent) {
      event.locals.projects = await getProjects();
    }
    if (isLoginPage && isSessionPresent) {
      const firstProject = event.locals.projects && event.locals.projects[0];
      throw redirect(303, `/${firstProject}/identitas-proyek`);
    }
  }
  if (event.locals.projects?.findIndex((project) => project === projectPage) === -1) {
    throw error(404, "not found");
  }
  return resolve(event);
};
export {
  handle
};
