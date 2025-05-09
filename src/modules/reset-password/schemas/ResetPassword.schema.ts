import { z } from 'zod';

export const resetPasswordSchema = z
	.object({
		password: z.string().min(6, 'Пароль должен быть минимум 6 символов'),
		confirmPassword: z.string().nonempty('Повторите пароль'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type ResetPasswordFormType = z.infer<typeof resetPasswordSchema>;
