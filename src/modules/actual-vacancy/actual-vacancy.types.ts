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
	handleOpenModal: (title: string) => Promise<void>
}

export interface IVacancyFormProps {
	title: string;
	feedbackOpen: boolean;
    setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
