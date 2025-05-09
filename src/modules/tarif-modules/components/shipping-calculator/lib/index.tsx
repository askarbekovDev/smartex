'use client';
import Image from 'next/image';
import { useState } from 'react';
import America from '../../../../../../public/icons/america.svg';
import China from '../../../../../../public/icons/china.svg';
import Pinduoduo from '../../../../../../public/icons/pinduoduo.svg';
import Turkey from '../../../../../../public/icons/turkey.svg';
export const ShippingSelector = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(2);

	const options = [
		{ id: 0, name: 'Китай авто', flag: China, type: 'авто' },
		{ id: 1, name: 'Китай авто', flag: China, type: 'авто' },
		{ id: 2, name: 'Китай авиа', flag: China, type: 'авиа' },
		{ id: 3, name: 'США авиа', flag: America, type: 'авиа' },
		{ id: 4, name: 'Турция авиа', flag: Turkey, type: 'авиа' },
		{ id: 5, name: 'Пиндуодуо', flag: Pinduoduo, type: '' },
	];

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectOption = (id: number) => {
		setSelectedOption(id);
		setIsOpen(false);
	};

	return (
		<div className='relative w-full max-w-full mx-auto'>
			<div
				className='flex items-center p-4 bg-background border border-border rounded-[1rem] cursor-pointer'
				onClick={toggleDropdown}
			>
				<div className='flex items-center flex-1'>
					<div className='w-10 h-10 overflow-hidden rounded-full'>
						<Image
							src={options[selectedOption].flag}
							alt={options[selectedOption].name}
							width={40}
							height={40}
							className='object-cover'
						/>
					</div>
					<span className='ml-4 text-xl'>{options[selectedOption].name}</span>
				</div>
				<svg
					className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
				</svg>
			</div>

			{isOpen && (
				<div className='absolute w-full mt-1 bg-background border border-border rounded-lg shadow-lg z-10 h-[288px] overflow-scroll'>
					{options.map((option) => (
						<div
							key={option.id}
							className={`flex items-center p-4 cursor-pointer hover:bg-white first:rounded-lg last:rounded-lg border-b border-background last:border-b-0 ${
								option.id === selectedOption ? 'bg-white border' : ''
							}`}
							onClick={() => selectOption(option.id)}
						>
							<div className='w-10 h-10 overflow-hidden rounded-full'>
								<Image
									src={option.flag}
									alt={option.name}
									width={40}
									height={40}
									className='object-cover'
								/>
							</div>
							<span className='ml-4 text-lg'>{option.name}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
