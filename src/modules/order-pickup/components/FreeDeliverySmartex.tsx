import clsx from 'clsx';
import React, { FC } from 'react';
import { OrderPickUpContentType } from '../types';

type FreeDelSmrtx = {
	content: OrderPickUpContentType;
};

export const FreeDeliverySmartex: FC<FreeDelSmrtx> = ({ content }) => {
	return (
		<section className={clsx({ hidden: content !== 'Условия для доставки' })}>
			<div className='max-w-[558px] w850:max-w-full flex flex-col items-start gap-6'>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					Мы ценим наших клиентов и предлагаем бесплатную доставку при выполнении определённых
					условий! Теперь делать покупки за границей стало ещё выгоднее.
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					Условия бесплатной доставки:
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					✅ Минимальная сумма заказа – оформите заказ на сумму от X у.е. и получите бесплатную
					доставку.
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					✅ Минимальная сумма заказа – оформите заказ на сумму от X у.е. и получите бесплатную
					доставку.
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					✅ Объединение посылок – при отправке нескольких заказов одним отправлением от Y кг.
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					✅ Специальные акции – следите за нашими предложениями и получайте бесплатную доставку по
					промокодам.
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					Как воспользоваться? <br />
					- Оформите заказ в зарубежном интернет-магазине. <br />
					- Используйте наш склад в качестве адреса доставки. <br />- Выполните условия акции – и мы
					отправим вашу посылку бесплатно!
				</p>
				<p className='bodyText text-secondary_text w450:text-primary_text'>
					📦 SMARTEX – доставка без границ и без лишних затрат! <br />
					Если нужно уточнить условия, просто сообщи! 😊
				</p>
			</div>
		</section>
	);
};
