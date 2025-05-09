import Image from 'next/image';
import Inoplanitianin from '../../../public/icons/bg-inoplanitianin.svg';
import KrayNiz from '../../../public/icons/kray-niz.svg';
import KrayVerh from '../../../public/icons/kray-verh.svg';
import inoplonetianin from '../../../public/images/inoplonetianin.png';

export const TarifCard = ({
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
		<div className='w-full h-[280px] relative flex justify-center mx-auto'>
			<div className='h-[238px] w-[10px] mt-[17px] flex flex-col justify-between'>
				<Image src={KrayVerh} alt='KrayVerh' className='mt-[11.5px] w-[18px]' />
				<Image src={KrayNiz} alt='KrayNiz' className='mt-[11.5px] w-[18px]' />
			</div>
			<div className='flex absolute top-1/2 left-0 transform -translate-y-1/2 justify-center items-center h-[200px] bg-[#071E68] pt-[16.72px] pb-[17.78px] pl-[9px] pr-[11.29px] rounded-br-[21.3px] rounded-tr-[21.3px]'>
				<Image src={image || inoplonetianin} alt='inoplonetianin' width={104} height={165} />
			</div>
			<div className='w-full flex justify-between items-center gap-3 bg-white border border-solid border-border rounded-[16px] pr-[15px] pl-[126px]'>
				<div className='max-w-[240px] self-center flex flex-col gap-4'>
					<h6 className='h6 text-secondary'>{title}</h6>
					<p className='bodySmall'>
						🇺🇸 Цена в долларах: <b>{dollarPrice}</b>
					</p>
					<p className='bodySmall'>
						🇰🇬 Цена в сомах: <b>{somPrice}</b>
					</p>
				</div>
			</div>
		</div>
	);
};
