import SearchIcon from '../../../public/icons/search-icon';

export const SearchSection = () => {
	return (
		<div className='container bg-red-5'>
			<h1 className='h3 pt-[100px] pb-[12px]'>Отследить посылку</h1>
			<p className='bodyLarge text-secondary-text'>
				Введите трекинг номер и отслеживайте процесс доставки.
			</p>

			<div className='flex gap-6 mt-[40px] w550:flex-col w550:gap-4 h-15 bg-red-500'>
				<div className='flex items-center w-full h-full rounded-2xl border-1 border-border bg-white'>
					<div className='flex items-center h-full px-4'>
						<SearchIcon className='w-6 h-6 text-border' />
					</div>
					<input
						type='text'
						className='w-full h-full outline-0 placeholder:bodySmall placeholder:text-secondary-text'
						placeholder='Введите ваш трекинг код'
					/>
				</div>
				<button className='uiBtnText bg-primary cursor-pointer text-white w-[267px] h-full rounded-2xl'>
					Поиск
				</button>
			</div>
		</div>
	);
};
