import { json } from '@sveltejs/kit';

export async function POST({ request }: { request: Request }) {
  const data = await request.json();
  const { params, originalItem, newItem } = data;

  if (!params || !originalItem || !newItem) {
    return json(data, { status: 400 });
  }

  console.log({ originalItem, newItem });

  return json({ status: 'success' });
}
