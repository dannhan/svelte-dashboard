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
