'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CloseIconTablet } from '../../../../../public/icons';
import clsx from 'clsx';
import { Input } from '@/UI';
import { Textarea } from '@/UI/Textarea';
import { FileUpload } from '@/UI/FileUpload';
import { FIELDS, IVacancyFormProps } from '../..';
import { VacancyFormData, vacancyFormSchema } from '../../schemas/form-schema';

export const VacancyModalForm = ({ title, feedbackOpen, setFeedbackOpen }: IVacancyFormProps) => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<VacancyFormData>({
		resolver: zodResolver(vacancyFormSchema),
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			fullName: '',
			phoneNumber: '',
			message: '',
			resume: undefined,
		},
	});

	const onSubmit = (data: VacancyFormData) => {
		console.log('Отправленные данные:', data);
		setFeedbackOpen(false);
		reset();
	};

	return (
		<div
			className={clsx(
				`fixed top-1/2 transition-all duration-300 z-50 px-5 max-w-[588px] w-full pointer-events-none
				 transform -translate-x-1/2 -translate-y-1/2 right-1/2 left-1/2`,
				{
					'scale-100 opacity-100': feedbackOpen,
					'scale-50 opacity-0': !feedbackOpen,
				}
			)}
		>
			<div
				className={clsx(
					`relative rounded-2xl w-full max-h-[90vh] overflow-scroll bg-white p-12 w750:p-10 pointer-events-auto w550:bg-background w550:px-7 w450:px-5`,
					{ 'pointer-events-none': !feedbackOpen }
				)}
			>
				<h4 className='h4 text-secondary_text'>{title}</h4>
				<div
					onClick={() => setFeedbackOpen(false)}
					className='absolute top-5 right-8 cursor-pointer w550:right-6 w450:right-4 w370:hidden'
				>
					<CloseIconTablet />
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className='w-full pt-6 space-y-4'>
					{FIELDS.map(({ name, label, placeholder, type }) => (
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
						name='message'
						control={control}
						render={({ field }) => (
							<Textarea
								{...field}
								name='Опыт работы / Кратко о себе'
								placeholder='Опыт работы / Кратко о себе'
								error={errors.message?.message}
							/>
						)}
					/>
					<Controller
						name='resume'
						control={control}
						rules={{ required: 'Файл обязателен' }}
						render={({ field, fieldState }) => (
							<FileUpload
								label='Прикрепить резюме (PDF, DOCX)'
								onChange={(file) => field.onChange(file)}
								error={fieldState.error?.message}
							/>
						)}
					/>
					<button
						type='submit'
						className='w-full uiBtnText text-secondarytext border-2 border-border p-5 rounded-2xl bg-background 
                                           w750:rounded-xl w450:rounded-md w550:bg-white w450:bg-primary w450:border-0 w450:text-background'
					>
						ОТПРАВИТЬ СООБЩЕНИЕ
					</button>
				</form>
			</div>
		</div>
	);
};
