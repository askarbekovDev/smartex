'use client';

import { Input } from '@/UI';
import { FileUpload } from '@/UI/FileUpload';
import { NextButton } from '@/UI/NextButton';
import { PrevButton } from '@/UI/PrevButton';
import { Select } from '@/UI/Select';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { RequirementInfo, secondStepSchema, SecondStepSchema } from '../..';

export const SecondStepRegisterForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SecondStepSchema>({
		resolver: zodResolver(secondStepSchema),
	});

	const onSubmit = (data: SecondStepSchema) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full pt-6 space-y-4 flex flex-col justify-center items-center gap-2'
		>
			<Controller
				name='inn'
				control={control}
				render={({ field }) => (
					<Input
						{...field}
						placeholder='*ИНН'
						name='*ИНН'
						type='text'
						error={errors.inn?.message === 'Required' ? 'ИНН обязателен' : errors.inn?.message}
					/>
				)}
			/>
			<Controller
				name='pickupPoint'
				control={control}
				rules={{ required: 'Выберите ПВЗ' }}
				render={({ field, fieldState }) => (
					<Select
						label='Выберите ПВЗ'
						options={[
							{ label: 'Option 1', value: 'option 1' },
							{ label: 'Option 2', value: 'option 2' },
							{ label: 'Option 3', value: 'option 3' },
						]}
						value={field.value}
						onChange={field.onChange}
						error={
							fieldState.error?.message === 'Required'
								? 'ПВЗ обязателен'
								: fieldState.error?.message
						}
					/>
				)}
			/>
			<Controller
				name='backIdCard'
				control={control}
				rules={{ required: 'Файл обязателен' }}
				render={({ field, fieldState }) => (
					<FileUpload
						label='Скан ID карты лицевая сторона:'
						onChange={(file) => field.onChange(file)}
						error={fieldState.error?.message}
					/>
				)}
			/>
			<Controller
				name='frontIdCard'
				control={control}
				rules={{ required: 'Файл обязателен' }}
				render={({ field, fieldState }) => (
					<FileUpload
						label='Скан ID карты обратная сторона:'
						onChange={(file) => field.onChange(file)}
						error={fieldState.error?.message}
					/>
				)}
			/>
			<RequirementInfo />
			<div className='flex items-center gap-5 w450:gap-2'>
				<PrevButton />
				<NextButton />
			</div>
		</form>
	);
};
