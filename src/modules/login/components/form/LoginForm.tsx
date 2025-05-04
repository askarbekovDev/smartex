'use client';

import React from 'react';
import { LoginFormType, loginSchema } from './login-schema';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/UI';
import { Button } from '@/UI/Button';
import Checkbox from '@/UI/Checkbox';
import Link from 'next/link';

const fields: {
	name: 'email' | 'password';
	label: string;
	placeholder: string;
	type?: string;
}[] = [
	{ name: 'email', label: '*Почта', placeholder: '*E-mail адрес', type: 'email' },
	{ name: 'password', label: '*Пароль', placeholder: '*Пароль', type: 'password' },
];

export const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormType>({
		defaultValues: {
			email: '',
			password: '',
			isRemember: false,
		},
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginFormType) => {
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
			<div className='w-full flex justify-between items-center'>
				<Controller
					name='isRemember'
					control={control}
					render={({ field }) => (
						<div className='flex items-start gap-5 w450:gap-0'>
							<Checkbox {...field} />
							<p className='bodyText text-primary_text'>Запомнить меня</p>
						</div>
					)}
				/>
				<Link href='/forgot-password' className='bodyText text-primary_text'>
					Забыли пароль?
				</Link>
			</div>
			<Button>Войти</Button>
		</form>
	);
};
