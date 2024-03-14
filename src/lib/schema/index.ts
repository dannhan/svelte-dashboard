// todo: read zod documentation
import { z } from 'zod';

// login schema
export const loginSchema = z.object({
  password: z.string().min(1, { message: 'Password is required' })
});
export type LoginSchema = typeof loginSchema;

// logout schema
export const logoutSchema = z.object({});
export type LogoutSchema = typeof logoutSchema;

// project schema
export const projectSchema = z.object({
  name: z.string().min(1, { message: 'Project name is required' }),
  type: z.string({ required_error: 'Please select a construction type' })
});
export type ProjectSchema = typeof projectSchema;

// delete project schema
export const deleteProjectSchema = z.object({
  name: z.string().min(1, { message: 'Project name is required' })
});
export type DeleteProjectSchema = typeof deleteProjectSchema;

// image schema: todo
const MAX_FILE_SIZE = 1000000 // 10MB;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg"];

export const imageSchema = z.object({
  image: z
    .instanceof(File, { message: 'Please upload a file.'})
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 10MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png, webp and .svg formats are supported."
    )
});
