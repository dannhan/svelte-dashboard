import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../../chunks/ssr.js";
import { M as Mode_toggle } from "../../../../../chunks/mode-toggle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mb-4 flex items-center"><h1 class="text-3xl font-semibold" data-svelte-h="svelte-1dav5uf">Expremients</h1> ${validate_component(Mode_toggle, "ModeToggle").$$render($$result, {}, {}, {})}</div> <ul>${each(data.projects, (project) => {
    return `<li>${escape(project)}</li>`;
  })}</ul>`;
});
export {
  Page as default
};
