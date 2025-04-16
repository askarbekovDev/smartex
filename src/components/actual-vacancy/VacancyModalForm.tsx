import React from 'react';
import { CommonModal } from '../../UI/modal/CommonModal';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomInput } from '@/UI';
import { IVacancyFormProps } from './ActualVacancy.types';

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

export const VacancyModalForm = ({ title, feedbackOpen, setFeedbackOpen }: IVacancyFormProps) => {
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
		setFeedbackOpen(false);
		reset();
	};

	return (
		<CommonModal title={title} feedbackOpen={feedbackOpen} setFeedbackOpen={setFeedbackOpen}>
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

                <div className='flex justify-between items-center w650:flex-col w650:items-start gap-4'>
                    <p className='uiInputLabel text-primary-text w650:text-[16px] w650:'>Прикрепить резюме (PDF, DOCX)</p>
                    <label className='uiBtnText px-8 py-3 bg-info text-white rounded-[4px] cursor-pointer'>
                        <input className='hidden' type="file" />
                        Загрузить файл
                    </label>
                </div>

				<button
					type='submit'
					className='w-full uiBtnText text-secondary-text border-2 border-border p-5 rounded-2xl bg-background 
                                           w750:rounded-xl w450:rounded-md w550:bg-white w450:bg-primary w450:border-0 w450:text-background'
				>
					ОТПРАВИТЬ СООБЩЕНИЕ
				</button>
			</form>
		</CommonModal>
	);
};
