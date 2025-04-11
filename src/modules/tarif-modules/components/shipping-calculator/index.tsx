import clsx from 'clsx';
export const ShippingCalculator = () => {
	return (
		<section className='flex gap-[23px]'>
			<div className={clsx('w-full max-w-[655px] h-[448px] bg-white rounded-[16px]')}>
				<p>Выберите страну отправления</p>
			</div>
			<div className={clsx('w-full max-w-[461px] h-[452px] bg-white rounded-[16px]')}></div>
		</section>
	);
};
