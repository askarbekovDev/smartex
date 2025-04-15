import { FC } from 'react';
import { FAQ } from '../main-faq-modules';

export const PopularQuestionsBlock: FC = () => {
	return (
		<div className='container'>
			<div className='py-[140px]'>
				<h2 className='sectionTitle'>Популярные вопросы</h2>
				<div className='min-h-[400px] w-full mt-10'>
					<FAQ variant='red' />
				</div>
			</div>
		</div>
	);
};
