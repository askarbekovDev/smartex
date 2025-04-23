import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { ArrowIconDescripton } from '../../../public/icons';
import DontIcon from '../../../public/icons/dont-icon.svg';
import FaqIcon from '../../../public/icons/faq-icon.svg';

type SelectFaqProps = {
	title?: string;
	variant?: 'green' | 'red' | 'orange';
	image?: StaticImageData;
	isActive: boolean;
	onClick?: () => void;
	description?: string;
};

export const SelectFaq = ({
	title = 'Заголовок',
	image,
	variant = 'green',
	isActive,
	onClick,
	description,
}: SelectFaqProps) => {
	const icon = image || (variant === 'red' ? DontIcon : FaqIcon);
	const baseClass =
		'min-h-[56px] border border-solid px-[4px] text-wrap break-normal whitespace-normal w-full rounded-[8px] flex items-center cursor-pointer transition-colors duration-200 border border-solid border-[#CAC9C9] w750:rounded-none w750:border-0 w750:border-b w750:border-b-gray-300';

	const activeClass = isActive
		? 'bg-success text-background border-success'
		: 'bg-background text-primary border-[#CAC9C9]';

	switch (variant) {
		case 'green':
			return (
				<>
					<div
						className={`flex bodyLarge text-primary justify-between break-normal whitespace-normal gap-3 ${baseClass} ${activeClass}`}
						onClick={onClick}
					>
						<div className={clsx('my-[18px] ml-[16px]', isActive ? 'text-white' : 'text-primary')}>
							{title}
						</div>
						<Image src={FaqIcon} alt='FaqIcon' />
					</div>

					{isActive && (
						<div
							className={clsx(
								'hidden w750:block transition-[max-height,opacity] duration-700 ease-in-out',
								isActive ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
							)}
						>
							<p className='bodyText  leading-relaxed'>{description}</p>
						</div>
					)}
				</>
			);

		case 'red':
			return (
				<>
					<div
						className={`w-full w750:w-full w750:max-w-full  flex  justify-between gap-3 ${baseClass} rounded-[8px] border border-solid border-gray-200 ${activeClass}`}
						onClick={onClick}
					>
						<div className='flex flex-row-reverse gap-2'>
							{title}
							<Image src={DontIcon} alt='DontIcon' />
						</div>
						<ArrowIconDescripton isActive={isActive} />
					</div>
					{isActive && (
						<div
							className={clsx(
								'w750:block hidden transition-[max-height,opacity] duration-700 ease-in-out',
								isActive ? 'h-[100px] block' : 'hidden'
							)}
						>
							<p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
						</div>
					)}
				</>
			);

		case 'orange':
			return (
				<>
					<div
						className={`w750:w-full flex-row-reverse justify-end gap-3 ${baseClass} ${activeClass}`}
						onClick={onClick}
					>
						<div>{title}</div>
						<Image src={icon} alt='SmartIcon' />
					</div>
				</>
			);

		default:
			return null;
	}
};
