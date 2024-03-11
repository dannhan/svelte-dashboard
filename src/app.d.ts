// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
      isLogin: boolean | null;
      projects: string[] | null;
    }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
