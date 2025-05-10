import React from 'react';
import { REQUIREMENT_INFO_DATA } from '../..';

export const RequirementInfo = () => {
	return (
		<div className='w-full flex flex-col items-start'>
			<p className='bodyText text-primary_text'>Требования к файлу:</p>
			<ul className='list-disc ml-[17px]'>
				{REQUIREMENT_INFO_DATA.map((el, idx) => (
					<li key={idx}>
						<p className='bodyText text-primary_text'>{el.title}</p>
					</li>
				))}
			</ul>
			<p className='bodyText text-primary_text'>
				Мы используем ваши данные исключительно для идентификации и защиты ваших посылок. Политика
				конфиденциальности
			</p>
		</div>
	);
};
