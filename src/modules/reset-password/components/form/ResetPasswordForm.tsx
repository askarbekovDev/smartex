'use client';

import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { FORM_FIELDS } from '../../consts/formFields';
import { ResetPasswordFormType, resetPasswordSchema } from '../../schemas/ResetPassword.schema';

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
			<Button>Потвердить</Button>
		</form>
	);
};
