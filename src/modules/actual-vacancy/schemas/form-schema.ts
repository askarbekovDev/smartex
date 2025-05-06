import { z } from 'zod';

const FILE_SIZE_LIMIT = 2 * 1024 * 1024;
const FILE_TYPES_REGEX = /\.(pdf|docx)$/i;

export const vacancyFormSchema = z.object({
	fullName: z.string().min(3, 'Введите полное имя'),
	email: z.string().email('Некорректный email'),
	phoneNumber: z
		.string()
		.min(10, 'Введите полный номер')
		.regex(/^(\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Некорректный номер'),
	message: z.string().min(1, 'Введите сообщение'),
	resume: z
		.instanceof(File, { message: 'Файл обязателен' })
		.refine((file) => file.size <= FILE_SIZE_LIMIT, 'Файл слишком большой')
		.refine((file) => FILE_TYPES_REGEX.test(file.name), 'Неверный формат файла'),
});

export type VacancyFormData = z.infer<typeof vacancyFormSchema>;
