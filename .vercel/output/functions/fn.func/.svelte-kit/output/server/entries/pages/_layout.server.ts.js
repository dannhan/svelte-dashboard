import "../../chunks/index.js";
const load = async ({ locals }) => {
  if (locals.isLogin)
    return;
  return { projects: locals.projects };
};
export {
  load
};
