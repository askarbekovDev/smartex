'use client';

import React, { FC, useState } from 'react';
import { CloseIcon, MailIcon } from '../../public/icons';
import clsx from 'clsx';
import { Backdrop, CustomInput } from '@/UI';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
	fullName: z.string().min(3, 'Ф.И.О должно содержать минимум 3 символа'),
	email: z.string().email('Введите корректный email'),
	phoneNumber: z
		.string()
		.regex(
			/^(\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
			'Некорректный номер телефона'
		)
		.min(10, 'Телефон должен содержать минимум 10 цифр'),
	message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactUsForm: FC = () => {
	const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		mode: 'onSubmit',
	});

	const onSubmit = (data: FormData) => {
		console.log('Отправленные данные:', data);
		reset();
	};

	return (
		<>
			<Backdrop isOpen={feedbackOpen} setIsOpen={setFeedbackOpen} />
			<div onClick={() => setFeedbackOpen(true)} className='cursor-pointer'>
				<MailIcon />
			</div>

			<div
				className={clsx(
					'absolute top-12 rounded-2xl max-w-[588px] w-full h-fit bg-white transition-all duration-300 z-40 p-12',
					{
						'scale-100 opacity-100': feedbackOpen,
						'scale-50 opacity-0': !feedbackOpen,
					}
				)}
			>
				<h4 className='h4 text-secondary-text'>Свяжитесь с нами</h4>
				<div
					onClick={() => setFeedbackOpen(false)}
					className='absolute top-5 right-8 cursor-pointer'
				>
					<CloseIcon />
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className='w-full pt-6 space-y-4'>
					<div>
						<span className='uiInputLabel'>
							{errors.fullName ? (
								<span className='text-red-500'>{errors.fullName.message}</span>
							) : (
								'*Ф.И.О'
							)}
						</span>
						<CustomInput placeholder='*Ф.И.О' {...register('fullName')} />
					</div>

					<div>
						<span className='uiInputLabel'>
							{errors.email ? (
								<span className='text-red-500'>{errors.email.message}</span>
							) : (
								'*Электронный адрес'
							)}
						</span>
						<CustomInput type='email' placeholder='*Электронный адрес' {...register('email')} />
					</div>

					<div>
						<span className='uiInputLabel'>
							{errors.phoneNumber ? (
								<span className='text-red-500'>{errors.phoneNumber.message}</span>
							) : (
								'*Номер телефона'
							)}
						</span>
						<CustomInput type='tel' placeholder='*Номер телефона' {...register('phoneNumber')} />
					</div>

					<div>
						<span className='uiInputLabel'>
							{errors.message ? (
								<span className='text-red-500'>{errors.message.message}</span>
							) : (
								'*Написать сообщение'
							)}
						</span>
						<textarea
							className='w-full py-4 px-5 bodyText placeholder:text-secondary-text text-primary-text 
							           border-1 border-border rounded-[10px] outline-0 bg-background'
							placeholder='*Напишите ваше сообщение...'
							rows={4}
							{...register('message')}
						></textarea>
					</div>

					<button
						type='submit'
						className='w-full uiBtnText text-secondary-text border-2 border-border p-5 rounded-2xl bg-background'
					>
						ОТПРАВИТЬ СООБЩЕНИЕ
					</button>
				</form>
			</div>
		</>
	);
};
