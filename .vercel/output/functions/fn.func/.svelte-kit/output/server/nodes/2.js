import * as server from '../entries/pages/(dashboard)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(dashboard)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(dashboard)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.xD6l7qQm.js","_app/immutable/chunks/scheduler.Cglc-E-6.js","_app/immutable/chunks/index.9iPnfnGV.js","_app/immutable/chunks/index.BALLBs5G.js","_app/immutable/chunks/index.C4PciY-_.js","_app/immutable/chunks/each.Dtgx6mEA.js","_app/immutable/chunks/stores.ByXjrq1h.js","_app/immutable/chunks/entry.GOwwhzx_.js","_app/immutable/chunks/index.DSCnVugL.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/input.CyNn_tG7.js","_app/immutable/chunks/index.BlvzRe2p.js","_app/immutable/chunks/command-input.CeEokZ8F.js","_app/immutable/chunks/MagnifyingGlass.1BoxrdsM.js","_app/immutable/chunks/mode-toggle.Cs9G0DsI.js","_app/immutable/chunks/mode.BQ9atwLW.js"];
export const stylesheets = ["_app/immutable/assets/index.Bi8DJf9Z.css"];
export const fonts = [];
