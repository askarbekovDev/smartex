'use client';
import { SelectFaq } from '@/UI';
import Image from 'next/image';
import { useState } from 'react';
import FaqIcon from '../../../public/icons/faq-icon.svg';
import { smart } from './constant';
export const FAQ = () => {
	const [activeId, setActiveId] = useState<number | null>(null);

	return (
		<section className='w-full'>
			<div className='mb-6'>
				<h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Популярные вопросы</h1>
			</div>
			<div className='flex gap-6'>
				<div className='flex flex-col w-full gap-4'>
					{smart.map((item) => (
						<SelectFaq
							key={item.id}
							variant='orange'
							title={item.title}
							image={item.image}
							isActive={activeId === item.id}
							onClick={() => setActiveId(item.id)}
						/>
					))}
				</div>
				<div className='w-full h-fit border border-gray-300 rounded-lg flex p-4 shadow-sm items-start'>
					<p className='h-auto  '>
						SMARTEX — это компания, предоставляющая логистические услуги как для продавцов, так и
						для потребителей. Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen
						book. It has survived not only five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
						release of Letraset sheets containing Lorem Ipsum passages, and more recently with
						desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<Image src={FaqIcon} alt='FaqIcon' className='m-2' />
				</div>
			</div>
		</section>
	);
};
