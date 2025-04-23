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
		<div className='w-full max-w-[364px] h-[280px] relative flex justify-center mx-auto'>
			<div className='w-[5%] flex flex-col w420:h-[240px] justify-evenly gap-[155px] w850:mr-[2px] w750:mr-0 w420:gap-[136px] w370:gap-[132px] w370:mr-0'>
				<Image
					src={KrayVerh}
					alt='KrayVerh'
					className='w-[20px] min-w-[20px] max-w-[20px] w370:w-[17px] w370:max-w-[17px] w370:min-w-[17px] w420:w-[17px] w420:max-w-[17px] w420:min-w-[17px] flex-shrink-0'
				/>
				<Image
					src={KrayNiz}
					alt='KrayNiz'
					className='w-[20px] min-w-[20px] max-w-[20px] w370:w-[17px] w370:max-w-[17px] w370:min-w-[17px] w420:w-[17px] w420:max-w-[17px] w420:min-w-[17px] flex-shrink-0'
				/>
			</div>

			<div className='w-full max-w-[350px] relative w420:w-[330px] w370:max-w-[280px] w420:h-[240px] border border-solid border-border rounded-[16px] h-[280px] flex'>
				<Image
					src={Inoplanitianin}
					alt='Inoplanitianin'
					className='w-[140px] mt-[20px] ml-[-31px] w850:ml-[-32px] w750:ml-[-31px] w550:w-[140px] w370:w-[120px] w420:mt-[27.4px] w370:mt-[28px] w420:ml-[-29px] w370:ml-[-27px] w420:w-[120px] w420:h-[200px] '
				/>
				<Image
					src={image || inoplonetianin}
					alt='inoplonetianin'
					className='w-[100px] h-[140px] absolute top-[70px] left-[-15px] w550:w-[90px] w420:left-[-12px] w420:top-16 w420:w-[85px] w420:h-[115px] w370:w-[75px] w370:h-[100px] w370:left-[-10px] w370:top-18'
				/>
				<div className='w-[370px] self-center flex flex-col gap-4'>
					<h1 className='h6 text-secondary'>{title}</h1>
					<h1 className='w950:bodyText w550:bodySmall'>🇺🇸 Цена в долларах: {dollarPrice} </h1>
					<h1 className='bodySmall'>🇰🇬 Цена в сомах: {somPrice}</h1>
				</div>
			</div>
		</div>
	);
};
