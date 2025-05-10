import clsx from 'clsx';
import Image from 'next/image';
import Korobka from '../../../../../public/images/korobka.png';

export const WeightCalculation = () => {
	return (
		<>
			<div className='w-full flex items-center gap-6 w650:flex-col mt-[40px]'>
				<div className='w-full max-w-[270px] h-[150px] self-center border border-border rounded-[16px] p-3'>
					<Image src={Korobka} alt='Korobka' className='w-full h-full object-contain' />
				</div>
				<div className={clsx('self-end')}>
					<p className='h6'>Фактический вес </p>
					<p className='bodyText text-secondary_text mt-3'>
						– это расчетный показатель, основанный на габаритах груза. Он используется, если объем
						груза значительно превышает его фактический вес. Для определения объемного веса
						применяется специальная формула, зависящая от типа транспорта. Этот параметр особенно
						важен при авиаперевозках и позволяет учитывать занимаемое пространство в транспортном
						средстве.
					</p>
				</div>
			</div>
			<div className='w-full flex items-center gap-6 w650:flex-col mt-[40px]'>
				<div className='w-full max-w-[270px] h-[150px] self-center border border-border rounded-[16px] p-3'>
					<Image src={Korobka} alt='Korobka' className='w-full h-full object-contain' />
				</div>
				<div className={clsx('self-end')}>
					<p className='h6'>Фактический вес </p>
					<p className='bodyText text-secondary_text mt-3'>
						– это расчетный показатель, основанный на габаритах груза. Он используется, если объем
						груза значительно превышает его фактический вес. Для определения объемного веса
						применяется специальная формула, зависящая от типа транспорта. Этот параметр особенно
						важен при авиаперевозках и позволяет учитывать занимаемое пространство в транспортном
						средстве.
					</p>
				</div>
			</div>
			<div className='w-full flex items-center gap-6 w650:flex-col mt-[40px]'>
				<div className='w-full max-w-[270px] h-[150px] self-center border border-border rounded-[16px] p-3'>
					<Image src={Korobka} alt='Korobka' className='w-full h-full object-contain' />
				</div>
				<div className={clsx('self-end')}>
					<p className='h6'>Фактический вес </p>
					<p className='bodyText text-secondary_text mt-3'>
						– это расчетный показатель, основанный на габаритах груза. Он используется, если объем
						груза значительно превышает его фактический вес. Для определения объемного веса
						применяется специальная формула, зависящая от типа транспорта. Этот параметр особенно
						важен при авиаперевозках и позволяет учитывать занимаемое пространство в транспортном
						средстве.
					</p>
				</div>
			</div>
		</>
	);
};
