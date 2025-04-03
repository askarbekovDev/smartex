'use client';

import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import clsx from 'clsx';
import { CloseIconTablet, MailIcon } from '../../../public/icons';
import { Backdrop, CustomInput } from '@/UI';

const formSchema = z.object({
	fullName: z.string().min(3, 'Введите полное имя'),
	email: z.string().email('Некорректный email'),
	phoneNumber: z
		.string()
		.min(10, 'Введите полный номер')
		.regex(/^(\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Некорректный номер'),
	message: z.string().min(1, 'Введите сообщение'),
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

	useEffect(() => {
		const handleBackButton = () => {
			setFeedbackOpen(false);
			window.history.replaceState(null, '', window.location.pathname);
		};
		if (feedbackOpen) {
			window.history.pushState(null, '', window.location.pathname);
			window.addEventListener('popstate', handleBackButton);
		} else {
			window.removeEventListener('popstate', handleBackButton);
		}
		return () => window.removeEventListener('popstate', handleBackButton);
	}, [feedbackOpen]);

	const onSubmit = (data: FormData) => {
		console.log('Отправленные данные:', data);
		setFeedbackOpen(false);
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
					`absolute top-12 transition-all duration-300 z-40 px-5 max-w-[588px] w-full pointer-events-none
					w750:transform w750:-translate-x-1/2 w750:left-1/2 w750:px-9 w550:w-full`,
					{
						'scale-100 opacity-100': feedbackOpen,
						'scale-50 opacity-0': !feedbackOpen,
					}
				)}
			>
				<div
					className={clsx(
						`relative rounded-2xl w-full h-fit bg-white p-12 w750:p-10 w550:px-8 pointer-events-auto w550:bg-background w450:px-5`,
						{ 'pointer-events-none': !feedbackOpen }
					)}
				>
					<h4 className='h4 text-secondary-text'>Свяжитесь с нами</h4>
					<div
						onClick={() => setFeedbackOpen(false)}
						className='absolute top-5 right-8 cursor-pointer w550:right-6 w450:right-4 w370:hidden'
					>
						<CloseIconTablet />
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className='w-full pt-6 space-y-4'>
						<span className='bodyText'>
							{errors.fullName ? (
								<span className='text-error'>{errors.fullName.message}</span>
							) : (
								'*Ф.И.О'
							)}
						</span>
						<CustomInput placeholder='*Ф.И.О' {...register('fullName')} />

						<span className='bodyText'>
							{errors.email ? (
								<span className='text-error'>{errors.email.message}</span>
							) : (
								'*Электронный адрес'
							)}
						</span>
						<CustomInput type='email' placeholder='*Электронный адрес' {...register('email')} />

						<span className='bodyText'>
							{errors.phoneNumber ? (
								<span className='text-error'>{errors.phoneNumber.message}</span>
							) : (
								'*Номер телефона'
							)}
						</span>
						<CustomInput type='tel' placeholder='*Номер телефона' {...register('phoneNumber')} />

						<span className='bodyText'>
							{errors.message ? (
								<span className='text-error'>{errors.message.message}</span>
							) : (
								'*Написать сообщение'
							)}
						</span>

						<textarea
							className='w-full py-4 px-5 bodyText placeholder:text-secondary-text text-primary-text 
							           border-1 border-border rounded-lg outline-0 bg-background resize-none w550:bg-white'
							placeholder='*Напишите ваше сообщение...'
							rows={7}
							{...register('message')}
						></textarea>

						<button
							type='submit'
							className='w-full uiBtnText text-secondary-text border-2 border-border p-5 rounded-2xl bg-background 
							           w750:rounded-xl w550:rounded-md w550:bg-primary w550:border-0 w550:text-background'
						>
							ОТПРАВИТЬ СООБЩЕНИЕ
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
