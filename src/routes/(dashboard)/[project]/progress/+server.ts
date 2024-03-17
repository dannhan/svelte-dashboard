import { json } from '@sveltejs/kit';
import { addProjectProgress, deleteProjectProgress } from '$lib/server/firebase';
import type { Data } from './data';

export async function POST({ request }: { request: Request }) {
  const data = await request.json();
  const { params, originalItem, newItem } = data as {
    params: string;
    originalItem: Data;
    newItem: Data;
  };

  if (!params || !originalItem || !newItem) {
    return json(data, { status: 400 });
  }

  console.log({ params, originalItem, newItem });

  await deleteProjectProgress(params, originalItem);
  await addProjectProgress(params, newItem);

  return json({ status: 'success' });
}
