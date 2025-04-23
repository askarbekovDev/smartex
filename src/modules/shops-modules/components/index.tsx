'use client';
import clsx from 'clsx';
import { useState } from 'react';

const categories = [
	{ id: 1, title: 'Авто запчасти', icon: '🚗' },
	{ id: 2, title: 'Одежда', icon: '👕' },
	{ id: 3, title: 'Дом и сад', icon: '🏠' },
	{ id: 4, title: 'Косметика', icon: '💄' },
	{ id: 5, title: 'Часы', icon: '⌚' },
];

const CategorySelectStyled = ({ onClick }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [selectedId, setSelectedId] = useState(1);

	const toggleOpen = () => setIsOpen((prev) => !prev);

	return (
		<div className='w-full border border-border rounded-lg bg-white'>
			{/* Заголовок */}
			<div
				className='flex items-center justify-between border-border px-4 py-3 cursor-pointer'
				onClick={toggleOpen}
			>
				<span className='font-medium text-black'>Категории</span>
				<span className='text-gray-400 text-sm'>{isOpen ? '⌃' : '⌄'}</span>
			</div>

			{/* Категории */}
			{isOpen && (
				<div className='flex flex-col'>
					{categories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => {
								setSelectedId(cat.id);
								onClick(cat.title);
							}}
							className={clsx(
								'flex items-center gap-2 px-4 py-3 border-b border-border last:border-b-0 transition-all text-left',
								selectedId === cat.id
									? 'bg-orange-50 text-black border-l-4 border-orange-500'
									: 'hover:bg-gray-100 text-black'
							)}
						>
							<div>
								<span className='text-xl'>{cat.icon}</span>
								{cat.title}
							</div>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default CategorySelectStyled;
