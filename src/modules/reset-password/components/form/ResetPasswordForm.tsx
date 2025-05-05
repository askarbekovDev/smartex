'use client';

import React from 'react';
import { ResetPasswordFormType, resetPasswordSchema } from './reset-password-schema';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/UI';
import { Button } from '@/UI/Button';

const fields: {
	name: keyof ResetPasswordFormType;
	label: string;
	placeholder: string;
	type?: string;
}[] = [
	{ name: 'password', label: '*Пароль', placeholder: '*Пароль', type: 'password' },
	{
		name: 'confirmPassword',
		label: '*Повторите пароль',
		placeholder: '*Повторите пароль',
		type: 'password',
	},
];

export const ResetPasswordForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ResetPasswordFormType>({
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
		resolver: zodResolver(resetPasswordSchema),
	});

	const onSubmit = (data: ResetPasswordFormType) => {
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
			<Button>Потвердить</Button>
		</form>
	);
};
