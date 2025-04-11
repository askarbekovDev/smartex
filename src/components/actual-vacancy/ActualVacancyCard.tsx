import React from 'react';

export const ActualVacancyCard = () => {
	return (
		<div className='w-full border border-border rounded-[16px] pt-[20px] pb-[22px] px-[16px]'>
			<h5 className='h5'>Логист-Менеджер</h5>
			<p className='bodySmall mt-4'>
				📍 <b>Локация:</b> Бишкек
			</p>
			<p className='bodySmall'>
				🕒 <b>Тип занятости:</b> Полный рабочий день
			</p>
			<ul className='bodySmall mt-4'>
				<b>Обязанности:</b>
				<li>Организация и контроль международных грузоперевозок</li>
				<li>Взаимодействие с партнёрами из Китая, Турции и США</li>
				<li>Работа с документацией и таможенными декларациями</li>
			</ul>
			<ul className='bodySmall mt-4'>
				<b>Требования:</b>
				<li>Опыт работы в логистике от 1 года</li>
				<li>Взаимодействие с партнёрами из Китая, Турции и США</li>
				<li>Работа с документацией и таможенными декларациями</li>
			</ul>
			<p className='bodySmall mt-4'>
				🔹 <b>Зарплата:</b> от 40 000 KGS
			</p>
			<div className='w-full flex justify-end items-center'>
				<button className='text-info bodyText underline underline-offset-4 mt-4'>
					Откликнуться
				</button>
			</div>
		</div>
	);
};
