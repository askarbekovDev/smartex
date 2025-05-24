import { ActualVacancy } from '@/modules/actual-vacancy/components/actual-vacancy/ActualVacancy';
import { VacancyIntro } from '@/modules/vacancy-intro';

const Vacancy = () => {
	return (
		<>
			<VacancyIntro />
			<ActualVacancy />
		</>
	);
};

export default Vacancy;
