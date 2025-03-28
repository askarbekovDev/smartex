import Image, { StaticImageData } from 'next/image';
import DontIcon from '../../../public/icons/dont-icon.svg';
import FaqIcon from '../../../public/icons/faq-icon.svg';

interface SelectFaqProps {
	title?: string;
	variant?: 'green' | 'red' | 'orange';
	image?: StaticImageData;
	isActive?: boolean;
	onClick?: () => void;
}

export const SelectFaq = ({
	title = 'Заголовок',
	image,
	variant = 'green',
	isActive = false,
	onClick,
}: SelectFaqProps) => {
	const icon = image || (variant === 'red' ? DontIcon : FaqIcon);

	const baseClass =
		'h-[56px] rounded-[8px] flex items-center border px-[16px] cursor-pointer transition-colors duration-200';
	const activeClass = isActive
		? 'bg-success text-background border-success'
		: 'bg-background text-primary border-[#CAC9C9]';

	switch (variant) {
		case 'green':
			return (
				<div
					className={`max-w-[558px] justify-between ${baseClass} ${activeClass}`}
					onClick={onClick}
				>
					<div>{title}</div>
					<Image src={FaqIcon} alt='FaqIcon' />
				</div>
			);

		case 'red':
			return (
				<div
					className={`max-w-[317px] flex-row-reverse justify-end gap-3 ${baseClass} ${activeClass}`}
					onClick={onClick}
				>
					<div>{title}</div>
					<Image src={DontIcon} alt='DontIcon' />
				</div>
			);

		case 'orange':
			return (
				<div
					className={`max-w-[317px] flex-row-reverse justify-end gap-3 ${baseClass} ${activeClass}`}
					onClick={onClick}
				>
					<div>{title}</div>
					<Image src={icon} alt='SmartIcon' />
				</div>
			);

		default:
			return null;
	}
};
