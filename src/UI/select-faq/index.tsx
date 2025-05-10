import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import DontIcon from '../../../public/icons/dont-icon.svg';
import FaqIcon from '../../../public/icons/faq-icon.svg';
import { ArrowIconDescripton } from '../../../public/icons';
import { useEffect } from 'react';

type SelectFaqProps = {
	title?: string;
	description: string;
	variant?: 'green' | 'red' | 'orange';
	image?: StaticImageData;
	index: number;
	activeIndex: number | null;
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
	setScrollPercent?: React.Dispatch<React.SetStateAction<number>>;
	scrollRef?: React.RefObject<HTMLDivElement | null>;
};

export const SelectFaq = ({
	title = 'Заголовок',
	image,
	index,
	variant = 'green',
	activeIndex,
	description,
	setActiveIndex,
	setScrollPercent,
	scrollRef,
}: SelectFaqProps) => {
	const icon = image || (variant === 'red' ? DontIcon : FaqIcon);
	const baseClass =
		'min-h-[56px] border px-[16px] text-wrap break-normal whitespace-normal w-full rounded-[8px] flex items-center cursor-pointer transition-colors duration-200 border-border w750:rounded-none w750:border-0 w750:border-b w750:border-b-gray-300';

	const activeClass =
		activeIndex === index
			? 'bg-success text-background border-success'
			: 'bg-background text-primary border-border';

	const handleScroll = () => {
		const el = scrollRef ? scrollRef.current : '';
		if (!el) return;

		const scrollTop = el.scrollTop;
		const scrollHeight = el.scrollHeight - el.clientHeight;
		const percent = (scrollTop / scrollHeight) * 100;

		if (setScrollPercent) {
			setScrollPercent(percent);
		}
	};

	useEffect(() => {
		const el = scrollRef ? scrollRef.current : '';
		if (!el) return;
		el.addEventListener('scroll', handleScroll);
		return () => el.removeEventListener('scroll', handleScroll);
	}, []);

	switch (variant) {
		case 'green':
			return (
				<>
					<div
						className={`flex justify-between break-normal whitespace-normal gap-3 ${baseClass} ${activeClass}`}
						onClick={() => setActiveIndex(index)}
					>
						<p
							className={clsx('bodyLarge text-primary_text my-[18px]', {
								'text-white': activeIndex === index,
							})}
						>
							{title}
						</p>
						<Image src={FaqIcon} alt='FaqIcon' />
					</div>
					{activeIndex === index && (
						<div
							className={clsx(
								'hidden w750:block transition-[max-height,opacity] duration-700 ease-in-out',
								activeIndex === index ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
							)}
						>
							<p className='font-rubik font-normal text-[16px] text-primary_text leading-[20px]'>
								{description}
							</p>
						</div>
					)}
				</>
			);

		case 'red':
			return (
				<>
					<div
						className={clsx(
							`w-full w750:w-full w750:max-w-full flex justify-between gap-3 ${baseClass} rounded-[8px] border border-solid border-gray-200`,
							{
								'border-secondary': activeIndex === index,
							}
						)}
						onClick={() => setActiveIndex(index)}
					>
						<div className='flex flex-row-reverse items-center gap-[10px] bodyLarge text-primary_text'>
							{title}
							<div className='border-0 w750:border border-border w-[38px] h-[38px] rounded-[100px] flex justify-center items-center'>
								<Image src={DontIcon} alt='DontIcon' />
							</div>
						</div>
						<div className='hidden w750:block'>
							<ArrowIconDescripton isActive={activeIndex === index} />
						</div>
					</div>
				</>
			);

		case 'orange':
			return (
				<>
					<div
						className={clsx(`w750:w-full flex-row-reverse justify-end gap-3 ${baseClass}`, {
							'border-secondary': activeIndex === index,
						})}
						onClick={() => setActiveIndex(index)}
					>
						<p className='bodyLarge text-primary_text'>{title}</p>
						<Image src={icon} alt='SmartIcon' />
					</div>
				</>
			);

		default:
			return null;
	}
};
