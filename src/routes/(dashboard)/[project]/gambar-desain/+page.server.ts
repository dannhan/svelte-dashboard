import { fail, type RequestEvent } from '@sveltejs/kit';
import { uploadDesignImage } from '$lib/server/firebase';

export const actions = {
  default: async (event: RequestEvent) => {
    const formData = Object.fromEntries(await event.request.formData());

    if (
      !(formData.fileToUpload as File).name ||
      (formData.fileToUpload as File).name === 'undefined'
    ) {
      return fail(400, {
        error: true,
        message: 'You must provide a file to upload'
      });
    }

    const { fileToUpload } = formData as { params: string; fileToUpload: File };

    const params = event.url.pathname.split("/")[1];

    await uploadDesignImage(params, fileToUpload);

    return { success: true };
  },
};
