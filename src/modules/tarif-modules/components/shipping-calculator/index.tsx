import { CustomInput } from '@/UI/CustomInput';
import clsx from 'clsx';
import Image from 'next/image';
import Shirina from '../../../../../public/icons/shirina-icon.svg';
import Vesy from '../../../../../public/icons/vesy-icon.svg';
import Warning from '../../../../../public/icons/warning-icon.svg';
import InoDostavka from '../../../../../public/images/ino-dostavka.png';
import { ShippingSelector } from './lib';

export const ShippingCalculator = () => {
	return (
		<div className='flex gap-[23px] w850:flex-wrap mt-6'>
			<div
				className={clsx(
					'w-full max-w-[655px] h-[448px] w850:max-w-full bg-white rounded-[16px] py-[50px] px-[16px] w550:h-full'
				)}
			>
				<div>
					<p className={clsx('mb-[24px]')}>Выберите страну отправления</p>
					<ShippingSelector />
				</div>
				<div className='flex gap-4 mt-4'>
					<p>Введите размеры (См)</p>
					<Image src={Warning} alt='Warning' />
				</div>
				<div className='flex gap-6 mt-3 w550:flex-wrap justify-center w550:gap-4 '>
					<div className='father__other'>
						<CustomInput placeholder='Вес' />
						<div className='other'>
							<Image src={Vesy} alt='Vesy' />
							<p className='bodyText'>Кг</p>
						</div>
					</div>
					<div className='father__other'>
						<CustomInput placeholder='Высота' />
						<div className='other'>
							<Image src={Shirina} alt='Vesy' />
							<p className='bodyText'>См</p>
						</div>
					</div>
					<div className='father__other'>
						<CustomInput placeholder='Ширина' />
						<div className='other'>
							<Image src={Vesy} alt='Vesy' />
							<p className='bodyText'>См</p>
						</div>
					</div>
					<div className='father__other'>
						<CustomInput placeholder='Длина' />
						<div className='other'>
							<Image src={Vesy} alt='Vesy' />
							<p className='bodyText'>См</p>
						</div>
					</div>
				</div>
				<div className='mt-4'>
					<CustomInput
						placeholder='0 сом'
						className='h-[72px] w550:h-[52px] w-full border border-solid border-border rounded-[16px] p-4 outline-0 bg-background w550:bodySmall w550:bg-white'
					/>
				</div>
			</div>
			<div
				className={clsx(
					'w-full max-w-[461px] w850:max-w-full pt-[50px] pb-[25px] px-4 h-full bg-white rounded-[16px] flex flex-col items-center gap-6',
					'w850:flex-row w850:items-stretch',
					'w550:flex-col w550:gap-y-6 w550:py-4 w550:px-2',
					'w550:border border-border w550:py-[20px] w550:px-5'
				)}
			>
				<div className='w-full max-w-[150px] w850:max-w-[133px] w550:w-full w550:max-w-[200px] mx-auto'>
					<Image src={InoDostavka} alt='InoDostavka' className=' w550:w-full' />
				</div>

				<div className='w-full max-w-[430px] h-full flex flex-col w850:items-start items-center'>
					<p className='h6 w950:text-[10px] text-center w850:text-start'>
						3.90у.е (345с) за 1 кг (4–9 рабочих дней)
					</p>
					<div className='bodyText text-secondary-text text-center w850:text-start mt-[12px]'>
						Стоимость доставки включает:
						<br />
						Полное сопровождение груза.
						<br />
						Быструю обработку на таможне.
						<br />
						Надежную упаковку и сохранность груза.
					</div>
					<div className='mt-[12px] text-center w850:text-start'>
						<p>
							<span className='text-error bodyEmphasized'>Обратите внимание:</span> стоимость может
							варьироваться в зависимости от объема и габаритов груза.
						</p>
					</div>
					<p className='underline mt-3 text-info cursor-pointer w-full text-center w850:text-right'>
						Нужна помощь?
					</p>
				</div>
			</div>
		</div>
	);
};
