import { z } from 'zod';

export const forgotPasswordSchema = z.object({
	email: z.string().email('Некорректный email'),
});

export type ForgotPasswordFormType = z.infer<typeof forgotPasswordSchema>;
