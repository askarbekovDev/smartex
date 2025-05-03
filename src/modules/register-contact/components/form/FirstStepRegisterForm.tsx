'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/UI';
import { NextButton } from '@/UI/NextButton';
import { RegisterFormType, registerSchema } from './form-scema';

const fields: {
	name: keyof RegisterFormType;
	label: string;
	placeholder: string;
	type?: string;
}[] = [
	{ name: 'lastName', label: '*Фамилия', placeholder: '*Фамилия', type: 'text' },
	{ name: 'firstName', label: '*Имя', placeholder: '*Имя', type: 'text' },
	{ name: 'email', label: '*Почта', placeholder: '*E-mail адрес', type: 'email' },
	{ name: 'phone', label: '*Телефон', placeholder: '*Телефон', type: 'text' },
	{ name: 'password', label: '*Пароль', placeholder: '*Пароль', type: 'password' },
	{
		name: 'confirmPassword',
		label: '*Повторите пароль',
		placeholder: '*Повторите пароль',
		type: 'password',
	},
];

export const FirstStepRegisterForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormType>({
		defaultValues: {
			lastName: '',
			firstName: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
		},
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data: RegisterFormType) => {
		console.log('Form Data:', data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full pt-6 space-y-4 flex flex-col justify-center items-center gap-2'
		>
			{fields.map(({ name, label, placeholder, type }, index) => (
				<Controller
					key={index}
					name={name}
					control={control}
					render={({ field }) => (
						<Input
							{...field}
							placeholder={placeholder}
							name={label}
							type={type}
							error={errors[name]?.message}
						/>
					)}
				/>
			))}
			<NextButton />
		</form>
	);
};
