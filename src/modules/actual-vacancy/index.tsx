'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { IVacancy } from '@/modules/actual-vacancy/actual-vacancy.types';
import { ActualVacancyCard } from '@/modules/actual-vacancy/components/ActualVacancyCard';
import { Loader } from '@/UI/loader/Loader';

const CommonModal = dynamic(() => import('@/UI/modal/CommonModal').then((mod) => mod.CommonModal), {
	ssr: false,
});

const VacancyModalForm = dynamic(
	() =>
		import('@/modules/actual-vacancy/components/form/VacancyModalForm').then(
			(mod) => mod.VacancyModalForm
		),
	{
		ssr: false,
		loading: () => <Loader />,
	}
);

const vacancies: IVacancy[] = [
	{
		title: 'Логист-Менеджер',
		location: 'Бишкек',
		employmentType: 'Полный рабочий день',
		salary: 'от 40 000 KGS',
		responsibilities: [
			'Организация и контроль международных грузоперевозок',
			'Взаимодействие с партнёрами из Китая, Турции и США',
			'Работа с документацией и таможенными декларациями',
		],
		requirements: [
			'Опыт работы в логистике от 1 года',
			'Взаимодействие с партнёрами из Китая, Турции и США',
			'Работа с документацией и таможенными декларациями',
		],
	},
	{
		title: 'Логист-Менеджер',
		location: 'Бишкек',
		employmentType: 'Полный рабочий день',
		salary: 'от 40 000 KGS',
		responsibilities: [
			'Организация и контроль международных грузоперевозок',
			'Взаимодействие с партнёрами из Китая, Турции и США',
			'Работа с документацией и таможенными декларациями',
		],
		requirements: [
			'Опыт работы в логистике от 1 года',
			'Взаимодействие с партнёрами из Китая, Турции и США',
			'Работа с документацией и таможенными декларациями',
		],
	},
	{
		title: 'Логист-Менеджер',
		location: 'Бишкек',
		employmentType: 'Полный рабочий день',
		salary: 'от 40 000 KGS',
		responsibilities: [
			'Организация и контроль международных грузоперевозок',
			'Взаимодействие с партнёрами из Китая, Турции и США',
			'Работа с документацией и таможенными декларациями',
		],
		requirements: [
			'Опыт работы в логистике от 1 года',
			'Взаимодействие с партнёрами из Китая, Турции и США',
			'Работа с документацией и таможенными декларациями',
		],
	},
];

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
						{vacancies.map((vacancy, idx) => (
							<ActualVacancyCard key={idx} vacancy={vacancy} handleOpenModal={handleOpenModal} />
						))}
					</div>
				</div>
				{feedbackOpen && vacancyTitle && (
					<CommonModal feedbackOpen={feedbackOpen} setFeedbackOpen={setFeedbackOpen}>
						<VacancyModalForm
							title={vacancyTitle}
							feedbackOpen={feedbackOpen}
							setFeedbackOpen={setFeedbackOpen}
						/>
					</CommonModal>
				)}
			</div>
		</div>
	);
};
