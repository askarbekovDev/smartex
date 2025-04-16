import { FC } from 'react';
import SearchIcon from '../../../public/icons/search-icon';

export const SearchSection: FC = () => {
	return (
		<section className='container'>
			<h1 className='h3 pt-[100px] pb-[12px] w1150:pt-20 w950:pt-15 w650:text-[24px]! w650:leading-[26px]!'>
				Отследить посылку
			</h1>
			<p className='bodyLarge text-secondary-text w550:text-[16px]!'>
				Введите трекинг номер и отслеживайте процесс доставки.
			</p>

			<div className='flex gap-6 mt-10 w550:flex-col w1150:mt-6 w750:gap-4 w550:mt-4 w550:gap-[12px]'>
				<div
					className='flex items-center w-full h-15 rounded-2xl border-1 border-border bg-white 
				                w950:h-12.5 w750:rounded-[12px] w550:h-11 w550:rounded-lg'
				>
					<div className='flex items-center h-full px-4'>
						<SearchIcon className='w-6 h-6 text-border' />
					</div>
					<input
						type='text'
						className='w-full h-full outline-0 placeholder:bodySmall placeholder:text-secondary-text'
						placeholder='Введите ваш трекинг код'
					/>
				</div>
				<button
					className='uiBtnText bg-primary hover:bg-primary_hover transition-all duration-200 cursor-pointer text-white w-[267px] h-15 rounded-2xl 
				  w950:h-12.5 w750:rounded-[12px] w550:w-full w550:h-11 w550:rounded-lg '
				>
					Поиск
				</button>
			</div>
		</section>
	);
};
