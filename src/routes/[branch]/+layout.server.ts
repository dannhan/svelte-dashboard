import type { LayoutServerLoad } from './$types';
import { getBranches } from '$lib/firebase';

export const load: LayoutServerLoad = async () => {
  return {
    branches: await getBranches()
  };
};
