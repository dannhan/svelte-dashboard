import type { Actions, PageServerLoad } from './$types';
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/schema';

export const actions: Actions = {
	login: async (event: RequestEvent) => {
		const form = await superValidate(event, zod(loginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		if (form.data.password === 'admin') {
			redirect(308, '/placeholder');
		}

		form.errors = { password: ['Password salah. Silakan coba lagi.'] };
		return fail(400, { form });
	},
	logout: async () => {
		redirect(303, '/');
	}
};

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};
