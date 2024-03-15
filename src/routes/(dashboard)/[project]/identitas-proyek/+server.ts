// todo
// import { projectIdentitySchema } from "$lib/schema";

import { json } from '@sveltejs/kit';
import { addProjectIdentity, deleteProjectIdentity } from '$lib/server/firebase';

export async function POST({ request }: { request: Request }) {
  const data = await request.json();
  const { params, originalItem, newItem } = data;

  if (!params || !originalItem || !newItem) {
    return json(data, { status: 400 });
  }

  // todo promise all
  await deleteProjectIdentity(params, originalItem);
  await addProjectIdentity(params, newItem);

  return json({ status: 'success' });
}
