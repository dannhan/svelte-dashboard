import { a as subscribe } from "../../../../chunks/lifecycle.js";
import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return ``;
});
export {
  Page as default
};
