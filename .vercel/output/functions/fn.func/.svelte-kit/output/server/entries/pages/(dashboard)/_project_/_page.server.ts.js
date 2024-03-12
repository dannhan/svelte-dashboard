import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { c as createProject, d as deleteProject } from "../../../../chunks/index7.js";
import "../../../../chunks/client.js";
import { a as zod, p as projectSchema, d as deleteProjectSchema } from "../../../../chunks/index4.js";
import "just-clone";
import "ts-deepmerge";
import "devalue";
import { s as superValidate } from "../../../../chunks/superValidate.js";
import "memoize-weak";
const actions = {
  create: async (event) => {
    const form = await superValidate(event, zod(projectSchema));
    if (!form.valid) {
      return fail(400, { form });
    }
    const projectName = form.data.name.toLowerCase();
    await createProject(projectName);
    redirect(303, `/${projectName}/identitas-proyek`);
  },
  delete: async (event) => {
    const form = await superValidate(event, zod(deleteProjectSchema));
    if (!form.valid) {
      return fail(400, { form });
    }
    const projectName = form.data.name;
    await deleteProject(projectName);
    return { form };
  },
  logout: async ({ cookies }) => {
    cookies.set("session", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    redirect(303, "/");
  }
};
export {
  actions
};
