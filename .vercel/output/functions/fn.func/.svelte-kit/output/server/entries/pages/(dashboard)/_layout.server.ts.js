import "../../../chunks/client.js";
import { a as zod, p as projectSchema, d as deleteProjectSchema, l as logoutSchema } from "../../../chunks/index4.js";
import "just-clone";
import "ts-deepmerge";
import "../../../chunks/index.js";
import "devalue";
import { s as superValidate } from "../../../chunks/superValidate.js";
import "memoize-weak";
const load = async () => {
  return {
    projectForm: await superValidate(zod(projectSchema)),
    deleteProjectForm: await superValidate(zod(deleteProjectSchema)),
    logoutForm: await superValidate(zod(logoutSchema))
  };
};
export {
  load
};
