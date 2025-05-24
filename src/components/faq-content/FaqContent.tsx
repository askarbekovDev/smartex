import { faqContentProps } from '@/types/faqContent';
import clsx from 'clsx';
import Image from 'next/image';
import FaqIcon from '../../../public/icons/faq-icon.svg';

export const FaqContent = ({ variant, content }: faqContentProps) => {
	return (
		<div
			className={clsx(
				'w-full max-w-[558px] h-fit border w750:hidden border-gray-300 rounded-lg flex justify-between p-4 shadow-sm items-start gap-4'
			)}
		>
			{content ? (
				<p className='text-sm text-gray-600 leading-relaxed'>{content}</p>
			) : (
				<p>Вас что то интересует ?</p>
			)}
			{variant === 'green' && (
				<Image src={FaqIcon} alt='FaqIcon' className='w-6 h-6 mt-1 shrink-0' />
			)}
		</div>
	);
};
