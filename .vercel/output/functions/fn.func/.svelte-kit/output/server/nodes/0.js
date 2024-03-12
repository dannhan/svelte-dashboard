import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Bj3Xfncm.js","_app/immutable/chunks/scheduler.Cglc-E-6.js","_app/immutable/chunks/index.9iPnfnGV.js","_app/immutable/chunks/mode.BQ9atwLW.js","_app/immutable/chunks/index.C4PciY-_.js","_app/immutable/chunks/entry.GOwwhzx_.js"];
export const stylesheets = ["_app/immutable/assets/0.KKyKOcgj.css"];
export const fonts = ["_app/immutable/assets/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2","_app/immutable/assets/inter-cyrillic-wght-normal.BmJJXa8e.woff2","_app/immutable/assets/inter-greek-ext-wght-normal.D5AYLNiq.woff2","_app/immutable/assets/inter-greek-wght-normal.DyIDNIyN.woff2","_app/immutable/assets/inter-vietnamese-wght-normal._GQuwPVU.woff2","_app/immutable/assets/inter-latin-ext-wght-normal.CN1pIXkb.woff2","_app/immutable/assets/inter-latin-wght-normal.BgVq2Tq4.woff2"];
