import SearchIcon from '../../../public/icons/search-icon';

export const SearchSection = () => {
	return (
		<div>
			<h1 className='h3 mb-1'>Отследить посылку</h1>
			<p className='bodyLarge'>Введите трекинг номер и отслеживайте процесс доставки.</p>

			<div className='flex gap-5.5 mt-[40px] w550:flex-col w550:gap-4'>
				<div className='relative w-full'>
					<SearchIcon className='absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#CAC9C9]' />
					<input
						type='text'
						className='w-full rounded-[16px] border border-solid border-[#CAC9C9] py-[20px] px-[56px] pl-[48px]'
						placeholder='Введите ваш трекинг код'
					/>
				</div>
				<button className='bg-primary cursor-pointer text-background py-[20px] rounded-[16px] px-[104px] w550:w-full'>
					Поиск
				</button>
			</div>
		</div>
	);
};
