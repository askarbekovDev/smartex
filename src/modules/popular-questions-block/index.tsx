import { FC } from 'react';
import { FAQ } from '../main-faq-modules';

export const PopularQuestionsBlock: FC = () => {
	return (
		<div className='container'>
			<div className='py-[140px]'>
				<h2 className='h2'>Популярные вопросы</h2>
				<div className='min-h-[400px] w-full mt-10'>
					<FAQ variant='green' />
				</div>
			</div>
		</div>
	);
};
