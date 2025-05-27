'use client';

import { Button } from '@/UI/Button';
import Checkbox from '@/UI/Checkbox';
import { Input } from '@/UI/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { FORM_FIELDS } from '../../consts/formFields';
import type { LoginFormType } from '../../schemas/login.schema';
import { loginSchema } from '../../schemas/login.schema';
import { useLoginMutation } from '../../api/loginApi';
import { useState } from 'react';
import { showError, showSuccess } from '@/utils/helper/toast';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
	const [isRemember, setIsRemember] = useState<boolean>(false);
	const [login, { isLoading }] = useLoginMutation();
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormType>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(loginSchema),
	});

	const handleSetIsremember = () => {
		setIsRemember(true);
	};

	const onSubmit = async (data: LoginFormType) => {
		const fireBaseToken = process.env.NEXT_PUBLIC_FIREBASE_TOKEN;

		if (!fireBaseToken) {
			showError('Отсутствует токен Firebase');
			return;
		}

		try {
			const payload = { ...data, fireBaseToken };
			await login(payload).unwrap();
			showSuccess('Вы успешно вошли в систему');
			router.push('/');
		} catch (err: unknown) {
			showError(err);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full pt-6 space-y-4 flex flex-col justify-center items-center gap-2'
		>
			{FORM_FIELDS.map(({ name, label, placeholder, type }, index) => (
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
				<div className='flex items-start gap-5 w450:gap-0'>
					<Checkbox name='isRemember' value={isRemember} onChange={handleSetIsremember} />
					<p className='bodyText text-primary_text'>Запомнить меня</p>
				</div>
				<Link href='/forgot-password' className='bodyText text-primary_text'>
					Забыли пароль?
				</Link>
			</div>
			<Button isLoading={isLoading} isDisabled={isLoading}>
				Войти
			</Button>
		</form>
	);
};
