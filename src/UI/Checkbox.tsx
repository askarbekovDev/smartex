import React from 'react';
import { CheckboxVector } from '../../public/icons';

type CheckboxPropsType = {
	name: string;
	value: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	error?: string;
};

const Checkbox = ({ name, value, onChange, error }: CheckboxPropsType) => {
	return (
		<label className='cursor-pointer'>
			<input
				id={name}
				type='checkbox'
				checked={value}
				onChange={onChange}
				className='hidden peer'
			/>
			<div
				className={`w-[20px] h-[20px] rounded-[2px] border border-icons flex justify-center items-center ${
					value ? 'border-info' : ''
				}`}
			>
				{value ? <CheckboxVector /> : ''}
			</div>
		</label>
	);
};

export default Checkbox;
