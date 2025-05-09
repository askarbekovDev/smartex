import { z } from 'zod';

export const registerAddressSchema = z.object({
	cityAndVilage: z.string().nonempty('Город обязателен'),
	street: z.string().nonempty('Улица обязательна'),
	apartment: z.string().nonempty('Номер квартиры обязателен'),
	agreed: z.boolean().refine((val) => val === true, {
		message: 'Вы должны согласиться с офертой',
	}),
});

export type RegisterFormType = z.infer<typeof registerAddressSchema>;
