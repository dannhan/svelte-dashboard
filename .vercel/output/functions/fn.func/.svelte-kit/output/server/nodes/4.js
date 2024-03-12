import * as server from '../entries/pages/(dashboard)/_project_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(dashboard)/_project_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(dashboard)/[project]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.DFVnd6W7.js","_app/immutable/chunks/scheduler.Cglc-E-6.js","_app/immutable/chunks/index.9iPnfnGV.js","_app/immutable/chunks/entry.GOwwhzx_.js","_app/immutable/chunks/index.C4PciY-_.js","_app/immutable/chunks/stores.ByXjrq1h.js"];
export const stylesheets = [];
export const fonts = [];
