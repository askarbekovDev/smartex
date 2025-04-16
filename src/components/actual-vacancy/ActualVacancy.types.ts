export interface IVacancy {
	title: string;
	location: string;
	employmentType: string;
	salary: string;
	responsibilities: string[];
	requirements: string[];
}

export interface IVacancyCardProps {
	vacancy: IVacancy;
    setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setVacancyTitle: React.Dispatch<React.SetStateAction<string>>;
}

export interface IVacancyFormProps {
	title: string;
	feedbackOpen: boolean;
    setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
