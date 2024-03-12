import { f as fail } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { a as zod, b as loginSchema } from "../../../chunks/index4.js";
import "just-clone";
import "ts-deepmerge";
import "devalue";
import { s as superValidate } from "../../../chunks/superValidate.js";
import "memoize-weak";
const load = async () => {
  return {
    form: await superValidate(zod(loginSchema))
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginSchema));
    const password = form.data.password;
    if (!form.valid) {
      return fail(400, { form });
    }
    if (password !== "admin") {
      form.errors = { password: ["Password salah. Silakan coba lagi."] };
      return fail(400, { form });
    }
    const token = password;
    event.cookies.set("session", `${token}`, {
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24
      // 1 day
    });
    return { form };
  }
};
export {
  actions,
  load
};
