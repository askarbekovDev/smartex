'use client';

import { Loader } from '@/UI/loader/Loader';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ACTUAL_VACANCY } from '../../consts/actualVacancy';
import { ActualVacancyCard } from '../vacancy-card/ActualVacancyCard';

const VacancyModal = dynamic(
	() => import('../vacancy-modal/VacancyModal').then((mod) => mod.VacancyModal),
	{
		ssr: false,
		loading: () => <Loader />,
	}
);

export const ActualVacancy = () => {
	const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);
	const [vacancyTitle, setVacancyTitle] = useState<string>('');

	const handleOpenModal = async (title: string) => {
		setVacancyTitle(title);
		setFeedbackOpen(true);
	};

	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-full'>
					<h2 className='sectionTitle'>Вакансии</h2>
					<div className='mt-11 grid grid-cols-3 w1050:grid-cols-2 w750:grid-cols-1 gap-6'>
						{ACTUAL_VACANCY.map((vacancy, idx) => (
							<ActualVacancyCard key={idx} vacancy={vacancy} handleOpenModal={handleOpenModal} />
						))}
					</div>
				</div>
				{feedbackOpen && vacancyTitle && (
					<VacancyModal
						title={vacancyTitle}
						feedbackOpen={feedbackOpen}
						setFeedbackOpen={setFeedbackOpen}
					/>
				)}
			</div>
		</div>
	);
};
