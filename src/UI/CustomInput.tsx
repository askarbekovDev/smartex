import React, { forwardRef } from 'react';

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ ...props }, ref) => {
	return (
		<input
			ref={ref}
			className='w-full py-4 px-5 bodyText placeholder:text-secondary-text text-primary-text 
			           border-1 border-border rounded-lg outline-0 bg-background w550:bodySmall w550:bg-white'
			{...props}
		/>
	);
});

CustomInput.displayName = 'CustomInput';
