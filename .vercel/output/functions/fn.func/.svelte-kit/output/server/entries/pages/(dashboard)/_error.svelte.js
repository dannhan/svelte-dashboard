import { a as subscribe } from "../../../chunks/lifecycle.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores2.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}: ${escape($page.error?.message)}</h1>`;
});
export {
  Error as default
};