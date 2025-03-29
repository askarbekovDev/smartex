import Image, { StaticImageData } from 'next/image';
import DontIcon from '../../../public/icons/dont-icon.svg';
import FaqIcon from '../../../public/icons/faq-icon.svg';

interface SelectFaqProps {
	title?: string;
	variant?: 'green' | 'red' | 'orange';
	image?: StaticImageData;
	isActive?: boolean;
	onClick?: () => void;
	description?: string;
}

export const SelectFaq = ({
	title = 'Заголовок',
	image,
	variant = 'green',
	isActive = false,
	onClick,
	description,
}: SelectFaqProps) => {
	const icon = image || (variant === 'red' ? DontIcon : FaqIcon);
	const baseClass =
		'min-h-[56px] text-wrap break-normal whitespace-normal w-full rounded-[8px] flex items-center px-[16px] cursor-pointer transition-colors duration-200 border border-solid border-[#CAC9C9] w750:rounded-none w750:border-none w750:border-b w750:border-b-gray-300';

	const activeClass = isActive
		? 'bg-success text-background border-success'
		: 'bg-background text-primary border-[#CAC9C9]';

	switch (variant) {
		case 'green':
			return (
				<>
					<div
						className={`flex justify-between break-normal whitespace-normal gap-3 w750:border-none w750:border-b w750:border-b-gray-300 ${baseClass} ${activeClass}`}
						onClick={onClick}
					>
						<div>{title}</div>
						<Image src={FaqIcon} alt='FaqIcon' />
					</div>

					{isActive && (
						<div
							className={`
						  w750:block hidden
						  overflow-hidden
						  transition-[max-height,opacity]
						  duration-700
						  ease-in-out
						  ${isActive ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
					    `}
						>
							<p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
						</div>
					)}
				</>
			);

		case 'red':
			return (
				<>
					<div
						className={`w-full w750:w-full w750:max-w-full w750:border-none w750:border-b w750:border-b-gray-300 flex flex-row-reverse justify-end gap-3 ${baseClass} rounded-[8px] border border-solid border-gray-200 ${activeClass}`}
						onClick={onClick}
					>
						<div>{title}</div>
						<Image src={DontIcon} alt='DontIcon' />
					</div>
					{isActive && (
						<div
							className={`
                    w750:block hidden
                    overflow-hidden
                    transition-[max-height,opacity]
                    duration-700
                    ease-in-out
                    ${isActive ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
                  `}
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
