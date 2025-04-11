'use client';
import React, { useRef, useState } from 'react';
import clsx from 'clsx';

interface ToggleButtonProps<T, U extends readonly string[]> {
	buttons: U;
	defaultWidth: number;
	setState?: React.Dispatch<React.SetStateAction<T>>;
}

export const ToggleButton = <T, U extends readonly string[]>({
	buttons,
	defaultWidth,
	setState,
}: ToggleButtonProps<T, U>) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const handleClickBtn = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
		setActiveIndex(index);
		if (setState) {
			const value = buttons[index] as T;
			setState(value);
		}
	};

	return (
		<div className='relative w-fit rounded border border-border flex'>
			<div
				className={clsx('absolute max-h-15 bg-success transition-all duration-300 rounded', {
					'w450:h-full': buttons.length > 2,
					'h-full': buttons.length,
				})}
				style={{
					width: buttonRefs.current[activeIndex]?.offsetWidth || defaultWidth,
					left: buttonRefs.current[activeIndex]?.offsetLeft || 0,
				}}
			></div>

			{buttons.map((label, index) => (
				<button
					key={index}
					ref={(el) => {
						if (el) buttonRefs.current[index] = el;
					}}
					className={clsx(
						`relative supportCaption w650:text-[13px]! px-4 py-2 cursor-pointer border-0 outline-0 text-center transition-colors`,
						{
							'text-white': activeIndex === index,
							'text-black': activeIndex !== index,
							'w450:px-4 w450:py-1': buttons.length > 2,
						}
					)}
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClickBtn(index, e)}
				>
					{label}
				</button>
			))}
		</div>
	);
};
