import React from 'react';
import { IVacancyCardProps } from '../actual-vacancy.types';

export const ActualVacancyCard = ({
	vacancy,
	handleOpenModal
}: IVacancyCardProps) => {

	return (
		<div className='w-full border border-border rounded-[16px] pt-[20px] pb-[22px] px-[16px] flex flex-col h-full'>
			<h5 className='h5 w550:text-[18px]!'>{vacancy.title}</h5>
			<p className='bodySmall mt-4'>
				📍 <b>Локация:</b> {vacancy.location}
			</p>
			<p className='bodySmall'>
				🕒 <b>Тип занятости:</b> {vacancy.employmentType}
			</p>
			<div className='flex-grow w750:flex-auto'>
				<ul className='bodySmall mt-4 px-4'>
					<b>Обязанности:</b>
					{vacancy.responsibilities.map((task: string, i: number) => (
						<li key={i} className='list-disc'>
							{task}
						</li>
					))}
				</ul>
				<ul className='bodySmall mt-4 px-4'>
					<b>Требования:</b>
					{vacancy.requirements.map((req: string, i: number) => (
						<li key={i} className='list-disc'>
							{req}
						</li>
					))}
				</ul>
				<p className='bodySmall mt-4'>
					🔹 <b>Зарплата:</b> {vacancy.salary}
				</p>
			</div>
			<div className='mt-auto w-full flex justify-end items-center'>
				<button
					onClick={() => handleOpenModal(vacancy.title)}
					className='text-info bodyText underline underline-offset-4 mt-4 cursor-pointer'
				>
					Откликнуться
				</button>
			</div>
		</div>
	);
};
