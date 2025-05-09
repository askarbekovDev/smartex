import { z } from 'zod';

const FILE_SIZE_LIMIT = 2 * 1024 * 1024;
const FILE_TYPES_REGEX = /\.(jpg|jpeg|png)$/i;

export const secondStepSchema = z.object({
	inn: z
		.string()
		.min(1, 'ИНН обязателен') // handles required (empty string)
		.min(6, 'ИНН должен содержать минимум 6 символов'),
	pickupPoint: z.string().min(1, 'ПВЗ обязателен'),
	frontIdCard: z
		.instanceof(File, { message: 'Файл обязателен' })
		.refine((file) => file.size <= FILE_SIZE_LIMIT, 'Файл слишком большой')
		.refine((file) => FILE_TYPES_REGEX.test(file.name), 'Неверный формат файла'),
	backIdCard: z
		.instanceof(File, { message: 'Файл обязателен' })
		.refine((file) => file.size <= FILE_SIZE_LIMIT, 'Файл слишком большой')
		.refine((file) => FILE_TYPES_REGEX.test(file.name), 'Неверный формат файла'),
});

export type SecondStepSchema = z.infer<typeof secondStepSchema>;
