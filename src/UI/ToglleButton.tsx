'use client';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type ToggleButtonProps<T, U extends readonly string[]> = {
	buttons: U;
	defaultWidth: number;
	setState: React.Dispatch<React.SetStateAction<T>>;
};

export const ToggleButton = <T, U extends readonly string[]>({
	buttons,
	setState,
}: ToggleButtonProps<T, U>) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [buttonWidth, setButtonWidth] = useState(0);
	const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

	const handleClickBtn = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
		setActiveIndex(index);
		if (setState) {
			const value = buttons[index] as T;
			setState(value);
		}
	};

	useEffect(() => {
		if (buttonRefs.current[activeIndex]) {
			setButtonWidth(buttonRefs.current[activeIndex]?.offsetWidth || 0);
		}
	}, [activeIndex]);	

	return (
		<div className='relative w-fit h-[40px] w450:h-[50px] rounded border border-border flex'>
			<div
				className={clsx('absolute h-full bg-success transition-all duration-300 rounded', {
					'w450:h-full': buttons.length > 2,
					'h-full': buttons.length,
				})}
				style={{
					width: buttonWidth || 0,
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
						`relative supportCaption w650:text-[13px]! px-4 h-[40px] flex justify-center items-center cursor-pointer border-0 outline-0 text-center transition-colors`,
						{
							'text-white': activeIndex === index && buttonWidth,
							'text-black': activeIndex !== index,
							'w450:px-4 w450:h-[50px]': buttons.length > 2,
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
