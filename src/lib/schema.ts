import { z } from 'zod';

export const loginSchema = z.object({
  password: z.string().min(1, { message: 'Password is required' })
});

export const logoutSchema = z.object({});

export const projectSchema = z.object({
  name: z.string().min(1, { message: 'Project name is required' }),
  type: z.string({ required_error: 'Please select a construction type' })
});

export const deleteProjectSchema = z.object({
  name: z.string().min(1, { message: 'Project name is required' })
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

export type LoginSchema = typeof loginSchema;
export type LogoutSchema = typeof logoutSchema;
export type ProjectSchema = typeof projectSchema;
export type DeleteProjectSchema = typeof deleteProjectSchema;
