import React from 'react';

const requirementInfoData = [
	{
		title: 'Размер файла: не более 2 МБ.',
	},
	{
		title: 'Форматы: JPEG, PNG, JPG.',
	},
	{
		title: 'Фото должно быть чётким и без бликов.',
	},
	{
		title: 'Видны: страница с фотографией и основными данными.',
	},
];

const RequirementInfo = () => {
	return (
		<div className='w-full flex flex-col items-start'>
			<p className='bodyText text-primary_text'>Требования к файлу:</p>
			<ul className='list-disc ml-[17px]'>
				{requirementInfoData.map((el, idx) => (
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

export default RequirementInfo;
