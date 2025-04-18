import Image from 'next/image';
import React from 'react';
import SmartexLogo from '../../../../public/icons/smartex-logo.svg';
import SmartexText from '../../../../public/icons/smartex-text.svg';
import { Call, Location } from '../../../../public/icons';
import { FooterNav } from './FooterNav';

export const footerLinks = [
	{
		title: 'Инструменты',
		links: [
			{ label: 'Калькулятор/Тарифы' },
			{ label: 'Пункты выдачи' },
			{ label: 'Запрещенные товары' },
			{ label: 'Часто задаваемые вопросы' },
		],
	},
	{
		title: 'О компании',
		links: [{ label: 'О нас' }, { label: 'Новости и события' }, { label: 'Вакансии' }],
	},
	{
		title: 'Контакты',
		links: [
			{ label: '0550 550 550', icon: <Call /> },
			{ label: '0550 550 550', icon: <Call /> },
			{ label: '0550 550 550', icon: <Call /> },
			{ label: 'г. Бишкек, ул. Шопокова 123', icon: <Location /> },
		],
	},
];

export const FooterLinks = () => {
	return (
		<div className='w-full w650:mt-20  w370:mt-24 bg-primary py-6 '>
			<div className=' flex container min-h-[250px] px-1 py-4 justify-center items-center'>
				<div className='px-4 flex flex-wrap w-full w750:flex-col justify-between gap-4'>
					<div className='flex flex-col gap-2 max-w-[300px] w420:pt-4'>
						<Image src={SmartexText} alt='SmartexText' />
						<Image src={SmartexLogo} alt='SmartexLogo' />
					</div>
					<div className='flex gap-8 flex-wrap'>
						{footerLinks.map((section, idx) => (
							<FooterNav key={idx} section={section} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
