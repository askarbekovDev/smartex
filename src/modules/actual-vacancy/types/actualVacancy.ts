export type IVacancy = {
	title: string;
	location: string;
	employmentType: string;
	salary: string;
	responsibilities: string[];
	requirements: string[];
};

export type IVacancyCardProps = {
	vacancy: IVacancy;
	handleOpenModal: (title: string) => Promise<void>;
};

export type IVacancyFormProps = {
	title: string;
	feedbackOpen: boolean;
	setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
