import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { M as Mode_toggle } from "../../../../../chunks/mode-toggle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mb-4 flex items-center"><h1 class="text-xl font-semibold" data-svelte-h="svelte-1jrfs43">Identitas Proyek</h1> ${validate_component(Mode_toggle, "ModeToggle").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
