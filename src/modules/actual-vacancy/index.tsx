import { ActualVacancyCard } from '@/components/actual-vacancy/ActualVacancyCard';
import React from 'react';

export const ActualVacancy = () => {
	return (
		<div className='container'>
			<div className='relative pt-[100px] w850:pt-[60px] w650:pt-[86px]'>
				<div className='max-w-full'>
					<h2 className='h2 text-primary-text w850:text-[28px]! w850:leading-[30px]! w550:text-[24px]! w550:leading-[26px]!'>
						Как SMARTEX помогает своим клиентам?
					</h2>
					<div className='mt-11 grid grid-cols-3 gap-6'>
						{[1, 2, 3].map((_, idx) => (
							<ActualVacancyCard />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

// 🕒 Тип занятости: Полный рабочий день

// Обязанности:
// Организация и контроль международных грузоперевозок
// Взаимодействие с партнёрами из Китая, Турции и США
// Работа с документацией и таможенными декларациями

// Требования:
// Опыт работы в логистике от 1 года
// Владение Excel и специализированными программами
// Знание иностранных языков (английский/турецкий) приветствуется

// 🔹 Зарплата: от 40 000 KGS
