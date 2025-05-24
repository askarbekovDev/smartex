'use client';

import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { ForgotPasswordFormType, forgotPasswordSchema } from '../../schemas/forgotPassword.schema';

export const ForgotPasswordForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormType>({
		defaultValues: {
			email: '',
		},
		resolver: zodResolver(forgotPasswordSchema),
	});

	const onSubmit = (data: ForgotPasswordFormType) => {
		console.log('Form Data:', data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full pt-6 space-y-4 flex flex-col justify-center items-center gap-2'
		>
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<Input
						{...field}
						placeholder='*E-mail адрес'
						name='*Почта'
						type='email'
						error={errors?.email?.message}
					/>
				)}
			/>
			<Button>Отправить</Button>
		</form>
	);
};
