import { RegisterFormType } from '..';

export type FormFieldsType = {
	name: keyof RegisterFormType;
	label: string;
	placeholder: string;
	type?: string;
};
