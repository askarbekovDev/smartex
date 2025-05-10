'use client';

import { SelectFaq } from '@/UI/select-faq';
import React, { useState } from 'react';
import { POPULAR_QUESTIONS } from '../../consts/popularQuestions';
import { FaqContent } from '@/components/faq-content/FaqContent';

export const PopularQuestionInfo = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const description =
		activeIndex !== null ? POPULAR_QUESTIONS[activeIndex].answer : 'Вас что то интересует ?';

	return (
		<div className='flex justify-between w750:block gap-6'>
			<div className='w-full flex flex-col justify-center items-center gap-2'>
				{POPULAR_QUESTIONS.map((question, index) => (
					<SelectFaq
						key={index}
						index={index}
						description={description}
						activeIndex={activeIndex}
						title={question.question}
						setActiveIndex={setActiveIndex}
						variant='green'
					/>
				))}
			</div>
			<div className='w-full'>
				<FaqContent variant='green' content={description} />
			</div>
		</div>
	);
};
