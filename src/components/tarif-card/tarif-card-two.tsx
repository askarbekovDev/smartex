import Image from 'next/image';
import Inoplanetian from '../../../public/images/inoplonetianin.png';

export const TarifCardTwo = ({
	title,
	dollarPrice,
	somPrice,
	image,
}: {
	title: string;
	dollarPrice: string;
	somPrice: string;
	image: any;
}) => {
	return (
		<div className='w-full max-w-[360px] rounded-[20px] border border-[#007AFF] bg-white px-5 py-4 flex gap-4 items-center w420:flex-col w420:text-center w420:gap-3 w420:py-5'>
			<div className='flex-shrink-0'>
				<Image
					src={image || Inoplanetian}
					alt='inoplanetian'
					className='w-[110px] h-auto drop-shadow-md mx-auto'
				/>
			</div>

			<div className='flex flex-col gap-3 justify-center'>
				<h2 className='text-[20px] font-bold text-[#FF8A00]'>{title}</h2>

				<p className='text-[16px] text-black leading-[1.4]'>
					🇺🇸 Цена в долларах: <span className='font-bold'>{dollarPrice}</span>/кг
				</p>

				<p className='text-[16px] text-black leading-[1.4]'>
					🇰🇬 Цена в сомах: <span className='font-bold'>{somPrice}</span>/кг
				</p>
			</div>
		</div>
	);
};
