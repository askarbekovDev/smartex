import { z } from 'zod';

export const registerSchema = z
	.object({
		lastName: z.string().nonempty('Фамилия обязательна'),
		firstName: z.string().nonempty('Имя обязательно'),
		email: z.string().email('Некорректный email'),
		phone: z.string().nonempty('Телефон обязателен'),
		password: z.string().min(6, 'Пароль должен быть минимум 6 символов'),
		confirmPassword: z.string().nonempty('Повторите пароль'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type RegisterFormType = z.infer<typeof registerSchema>;
