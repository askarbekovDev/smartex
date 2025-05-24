import { CommonModal } from '@/UI/modal/CommonModal';
import { VacancyModalForm, VacancyModalProps } from '../..';

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
