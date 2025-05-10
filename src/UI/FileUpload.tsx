'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

type FileUploadProps = {
	label: string;
	name?: string;
	accept?: string;
	onChange?: (file: File | null) => void;
	maxSizeMB?: number;
	error?: string;
};

export const FileUpload = ({
	label,
	name,
	accept = '.jpg,.jpeg,.png',
	onChange,
	maxSizeMB = 2,
	error,
}: FileUploadProps) => {
	const [fileName, setFileName] = useState<string>('Файл не выбран');

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const sizeInMB = file.size / (1024 * 1024);
			if (sizeInMB > maxSizeMB) {
				setFileName(`Файл слишком большой (> ${maxSizeMB} МБ)`);
				onChange?.(null);
				return;
			}
			setFileName(file.name);
			onChange?.(file);
		} else {
			setFileName('Файл не выбран');
			onChange?.(null);
		}
	};

	return (
		<div className='w-full flex justify-between items-center w650:flex-col w650:items-start gap-4'>
			<p className='uiInputLabel text-primary-text w650:text-[16px]'>{label}</p>

			<div className='flex flex-col items-center gap-[5px] w650:w-full w650:items-end'>
				<label
					htmlFor={name}
					className={clsx(
						'uiBtnText px-8 py-3 bg-info text-white rounded-[4px] cursor-pointer',
						error && 'bg-error'
					)}
				>
					Выбрать файл
					<input
						id={name}
						name={name}
						type='file'
						accept={accept}
						className='hidden'
						onChange={handleFileChange}
					/>
				</label>

				<p className='font-lato font-normal text-[13px] leading-[16px] text-primary_text'>
					{fileName} {`< ${maxSizeMB} МБ`}
				</p>

				{error && <p className='text-error text-[12px] leading-[14px] mt-1'>{error}</p>}
			</div>
		</div>
	);
};
