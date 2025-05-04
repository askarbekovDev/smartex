'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerAddressSchema, RegisterFormType } from './form.schema';
import { PrevButton } from '@/UI/PrevButton';
import { Input } from '@/UI';
import { Button } from '@/UI/Button';
import Checkbox from '@/UI/Checkbox';

const fields: {
	name: 'cityAndVilage' | 'street' | 'apartment';
	label: string;
	placeholder: string;
	type: string;
}[] = [
	{ name: 'cityAndVilage', label: '*Город/село', placeholder: '*Город/село', type: 'text' },
	{ name: 'street', label: '*Улица', placeholder: '*Улица', type: 'text' },
	{ name: 'apartment', label: '*Дом/квартира', placeholder: '*Дом/квартира', type: 'text' },
];

export const RegisterAddressForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormType>({
		resolver: zodResolver(registerAddressSchema),
		defaultValues: {
			cityAndVilage: '',
			street: '',
			apartment: '',
			agreed: false,
		},
	});

	const onSubmit = (data: RegisterFormType) => {
		console.log('📦 Submitted Address Data:', data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full pt-6 flex flex-col gap-4 items-center'
		>
			{fields.map(({ name, label, placeholder, type }) => (
				<Controller
					key={name}
					name={name}
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							name={label}
							placeholder={placeholder}
							type={type}
							error={errors[name]?.message}
						/>
					)}
				/>
			))}
			<Controller
				name='agreed'
				control={control}
				render={({ field }) => (
					<div className='relative w-full flex items-start gap-5'>
						<Checkbox {...field} />
						<p className='bodyText text-info'>Я согласен с публичной офертой</p>
					</div>
				)}
			/>
			<p className='bodyText text-primary_text ml-10'>
				После того, как Вы нажмете кнопку зарегистрировать, Вам придет письмо на почту для активации
				аккаунта. При его активации потребуется пин-код, который придет Вам на телефон. Таким
				образом, Вы подтвердите свой адрес электронной почты и номер телефона.
			</p>
			<Button className='mt-[32px]'>Зарегистрироваться</Button>
			<PrevButton />
		</form>
	);
};
