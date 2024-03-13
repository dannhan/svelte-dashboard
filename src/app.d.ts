// See https://kit.svelte.dev/docs/types#app

import type { Project } from "$lib/types";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      projects: Project[] | undefined;
    };
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}


export { };
