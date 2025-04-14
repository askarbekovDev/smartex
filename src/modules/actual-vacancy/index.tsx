import { IVacancy } from '@/components/actual-vacancy/ActualVacancy.types';
import { ActualVacancyCard } from '@/components/actual-vacancy/ActualVacancyCard';
import React from 'react';

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
	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-full'>
					<h2 className='sectionTitle'>Вакансии</h2>
					<div className='mt-11 grid grid-cols-3 w1050:grid-cols-2 w750:grid-cols-1 gap-6'>
						{vacancies.map((vacancy, idx) => (
							<ActualVacancyCard key={idx} vacancy={vacancy} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
