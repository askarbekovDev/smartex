'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from '../../public/icons';

type Option = {
	label: string;
	value: string;
};

type SelectProps = {
	label?: string;
	value?: string;
	options: Option[];
	onChange?: (value: string) => void;
	error?: string;
	disabled?: boolean;
	name?: string;
};

export const Select = ({
	value,
	options,
	onChange,
	label = 'Выберите нужный вариант',
	error,
	disabled = false,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const selectedOption = options?.find((option) => option.value === value);
	const handleToggle = () => {
		if (!disabled) setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div ref={ref} className='relative w-full'>
			<label
				htmlFor={label}
				className='pb-[4px] inline-block font-lato font-[400] text-primary_text'
			>
				{label}
			</label>
			<button
				id={label}
				type='button'
				onClick={handleToggle}
				disabled={disabled}
				className={clsx(
					'bodyText text-secondary_text w-full flex justify-between items-center outline-0 border rounded-lg py-[16px] px-[20px] transition-all bg-background w550:bodySmall w550:bg-white',
					error ? 'border-error' : 'border-border',
					{ 'border-border_hover': isOpen }
				)}
			>
				<span className={value ? 'text-primary_text' : 'text-secondary_text'}>
					{selectedOption?.label || label}
				</span>
				<div
					className={clsx('transition-transform duration-300', {
						'rotate-[-93deg]': isOpen,
					})}
				>
					<ChevronDown />
				</div>
			</button>

			{error && <p className='text-error text-[12px] mt-1 ml-5'>{error}</p>}

			<AnimatePresence>
				{isOpen && (
					<motion.ul
						className='absolute z-10 mt-1 w-full bg-white border border-border rounded-lg shadow-lg overflow-hidden'
						initial={{ opacity: 0, y: -5 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
					>
						{options?.map((option) => (
							<li
								key={option.value}
								onClick={() => {
									onChange?.(option.value);
									setIsOpen(false);
								}}
								className={clsx('font-lato px-4 py-2 cursor-pointer', {
									'bg-background': value === option.value,
									'hover:bg-background_hover': value !== option.value,
								})}
							>
								{option.label}
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};
