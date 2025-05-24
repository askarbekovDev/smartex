import { CommonModal } from '@/UI/modal/CommonModal';
import { VacancyModalProps } from '../../types/vacancyModal';
import { VacancyModalForm } from '../form/VacancyModalForm';

export const VacancyModal = ({ title, feedbackOpen, setFeedbackOpen }: VacancyModalProps) => {
	return (
		<CommonModal feedbackOpen={feedbackOpen} setFeedbackOpen={setFeedbackOpen}>
			<VacancyModalForm
				title={title}
				feedbackOpen={feedbackOpen}
				setFeedbackOpen={setFeedbackOpen}
			/>
		</CommonModal>
	);
};
