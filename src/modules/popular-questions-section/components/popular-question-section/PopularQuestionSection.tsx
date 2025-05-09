import { FC } from 'react';
import { PopularQuestionInfo } from '../popular-questions-info/PopularQuestionInfo';

export const PopularQuestionsSection: FC = () => {
	return (
		<section className='container'>
			<div className='pt-[140px] w1150:pt-[120px] w850:pt-[100px] w650:pt-[60px]'>
				<h2 className='sectionTitle text-primary_text'>Популярные вопросы</h2>
				<div className='min-h-[400px] w-full mt-10'>
					<PopularQuestionInfo />
				</div>
			</div>
		</section>
	);
};
