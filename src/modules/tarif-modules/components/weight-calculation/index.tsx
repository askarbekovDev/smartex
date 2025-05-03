import clsx from 'clsx';
import Image from 'next/image';
import Korobka from '../../../../../public/images/korobka.png';

export const WeightCalculation = () => {
	return (
		<section className='w-full flex gap-6 w650:flex-col mt-[40px]'>
			<div className='w-full max-w-[270px] h-[150px] self-center border border-border rounded-[16px] p-3'>
				<Image src={Korobka} alt='Korobka' className='w-full h-full object-contain' />
			</div>
			<div className={clsx('self-end')}>
				<p className='h6'>Фактический вес </p>
				<p className='bodyText mt-3'>
					– это реальный физический вес груза, измеряемый в килограммах. Он учитывается при расчетах
					стоимости перевозки и подборе подходящего транспорта. Для измерения используются
					стандартные весы, а данные вносятся в транспортные документы. Этот показатель особенно
					важен для тяжелых грузов с небольшими габаритами.
				</p>
			</div>
		</section>
	);
};
