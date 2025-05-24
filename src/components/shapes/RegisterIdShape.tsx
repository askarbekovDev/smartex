import Image from 'next/image';
import { PrimaryLogo } from '../../../public/icons';
import CurvePrimaryShape from '../../../public/images/curve-primary-shape.png';

export const RegisterIdShape = () => {
	return (
		<div className='w-full'>
			<Image
				src={CurvePrimaryShape}
				alt='smartex-primary-shape'
				width={650}
				height={260}
				priority
				className='w950:w-full transform w950:-translate-y-[11px] w750:-translate-y-[0px]'
			/>
			<div className='absolute w-[170px] w450:w-[100px] top-[90px] transform -translate-x-1/2 right-1/2 left-1/2 w950:left-[300px] w950:top-[196px] w850:left-[250px] w750:left-1/2 w750:top-[120px] w550:top-[90px] w450:top-[60px] text-secondary_text text-center flex flex-col gap-[7px]'>
				<PrimaryLogo />
				<hr />
				<p className='fon-[500] text-[12px] leading-[14px] text-primary_text'>
					Доставка,на которую можно положиться.
				</p>
			</div>
		</div>
	);
};
