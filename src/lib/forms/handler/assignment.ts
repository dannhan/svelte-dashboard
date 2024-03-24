import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { addProjectAssignment } from '$lib/server/firebase';
import { AssignmentsValidator } from '$lib/forms/validator/assignments';

export async function postAssignmentFormHandler(event: RequestEvent) {
  const form = await AssignmentsValidator.validatePostAssignmentPayload(event);

  if (!form.valid) {
    return fail(400, { form });
  }

  // todo
  const params = event.url.pathname.split('/')[1];
  await addProjectAssignment(params, {
    id: form.data.id,
    pekerjaan: form.data.pekerjaan,
    spk: form.data.spk,
    pelaksana: form.data.pelaksana,
    status: form.data.status,
    gambar: form.data.gambar || ''
  });

  redirect(303, '../tim-pelaksana');
}
