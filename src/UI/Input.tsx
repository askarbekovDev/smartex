'use client';

import React, { useState } from 'react';
import { EyeSeen } from '../../public/icons';
import { EyeUnseen } from '../../public/icons';
import clsx from 'clsx';

type InputPropsType = {
	name: string;
	placeholder: string;
	type?: string;
	value: string;
	onChange: (value: string) => void;
	error?: string;
};

export const Input = ({ name, placeholder, type, value, onChange, error }: InputPropsType) => {
	const [seenPassword, setSeenPassword] = useState(false);

	const inputType = type === 'password' && !seenPassword ? 'password' : 'text';

	return (
		<label className='relative w-full flex flex-col items-start gap-2'>
			<p className='uiInputLabel text-primary_text ml-5'>{name}</p>
			<input
				className={clsx(
					'w-full py-4 px-5 bodyText text-primary_text border rounded-lg outline-none bg-background w550:bodySmall w550:bg-white border-border',
					error ? 'border-error placeholder:text-error' : 'placeholder:text-secondary_text'
				)}
				placeholder={placeholder}
				type={inputType}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			{type === 'password' && (
				<span
					className='absolute right-[14.5px] top-[48px] cursor-pointer'
					onClick={() => setSeenPassword(!seenPassword)}
				>
					{seenPassword ? <EyeUnseen /> : <EyeSeen />}
				</span>
			)}
			{error && <p className='text-error text-[12px] leading-[14px] ml-5'>{error}</p>}
		</label>
	);
};
