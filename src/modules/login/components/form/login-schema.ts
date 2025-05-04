import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email('Некорректный email'),
	password: z.string().nonempty('Требуется пароль'),
	isRemember: z.boolean(),
});

export type LoginFormType = z.infer<typeof loginSchema>;
