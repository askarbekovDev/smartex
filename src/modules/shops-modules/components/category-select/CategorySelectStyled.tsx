'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { SHOPS_ITEMS } from '../../consts/shopsItem';
import Image from 'next/image';

type CategorySelectStyledProps = {
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
	activeIndex: number | null;
	title?: string;
	image?: string;
};

const CategorySelectStyled = ({
	setActiveIndex,
	activeIndex,
	title,
	image,
}: CategorySelectStyledProps) => {
	const [isOpen, setIsOpen] = useState(true);
	const toggleOpen = () => setIsOpen((prev) => !prev);

	return (
		<div className='w-full border border-border rounded-lg bg-white'>
			<div
				className='flex items-center justify-between border-border px-4 py-3 cursor-pointer'
				onClick={toggleOpen}
			>
				{title && image ? (
					<div className='flex items center gap-[10px]'>
						<Image src={image} alt={title} width={24} height={24} />
						<p className='bodyLarge text-primary_text'>{title || 'Категории'}</p>
					</div>
				) : (
					<p className='bodyLarge text-primary_text'>{'Категории'}</p>
				)}
				<span className='text-gray-400 text-sm'>{isOpen ? '⌃' : '⌄'}</span>
			</div>

			{isOpen && (
				<div className='flex flex-col max-h-[330px] overflow-scroll'>
					{SHOPS_ITEMS.map((item, index) => (
						<button
							key={index}
							onClick={() => {
								setActiveIndex(index);
							}}
							className={clsx(
								'flex items-center gap-2 px-4 py-3 last:border-b-0 transition-all text-left  border border-border bg-[#F8F9FA]',
								activeIndex === index
									? 'text-primary_text border border-secondary'
									: 'ext-primary_text'
							)}
						>
							<div className='flex items center gap-[10px]'>
								<Image src={item.image} alt={item.title} width={24} height={24} />
								<p className='bodyLarge text-primary_text'>{item.title}</p>
							</div>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default CategorySelectStyled;
