import clsx from 'clsx';
import React from 'react';

type TextareaPropsType = {
	name: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	error?: string;
};

export const Textarea = ({ name, placeholder, value, onChange, error }: TextareaPropsType) => {
	return (
		<label className='relative w-full flex flex-col items-start gap-2'>
			<p className='uiInputLabel text-primary_text ml-5'>{name}</p>
			<textarea
				className={clsx(
					'w-full py-4 px-5 bodyText text-primary-text border-1 border-border rounded-lg outline-0 bg-background resize-none w550:bg-white',
					error ? 'border-error placeholder:text-error' : 'placeholder:text-secondary_text'
				)}
				placeholder={placeholder}
				rows={7}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			></textarea>
			{error && <p className='text-error text-[12px] leading-[14px] ml-5'>{error}</p>}
		</label>
	);
};
