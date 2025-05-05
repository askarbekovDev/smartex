export type WizardStepType = {
	step: number;
	title: string;
};

export type WizardPropsType = {
	position: number;
	wizardStepData: WizardStepType[];
};
