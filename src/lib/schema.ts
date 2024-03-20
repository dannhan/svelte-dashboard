import { z } from 'zod';

export const postAuthenticationSchema = z.object({
  password: z.string().min(1, { message: 'Password is required' })
});

export const deleteAuthenticationSchema = z.object({});

export const postProjectSchema = z.object({
  name: z.string().min(1, { message: 'Project name is required' }),
  type: z.string({ required_error: 'Please select a construction type' })
});

export const deleteProjectSchema = z.object({
  name: z.string().min(1, { message: 'Project name is required' })
});

export const projectIdentitySchema = z.object({
  originalItem: z.object({
    id: z.string(),
    key: z.string(),
    value: z.string()
  }),
  newItem: z.object({
    id: z.string(),
    key: z.string(),
    value: z.string()
  })
});

const MAX_FILE_SIZE = 1000000; // 10MB;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg'];
export const imageSchema = z.object({
  image: z
    .instanceof(File, { message: 'Please upload a file...' })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 10MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png, webp and .svg formats are supported.'
    )
});

export const postAssignmentSchema = z.object({
  id: z.number(),
  pekerjaan: z.string(),
  spk: z.string(),
  pelaksana: z.string(),
  gambar: z.string(),
  status: z.string(),
})
