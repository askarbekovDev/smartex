import { RegisterFormType } from '../schemas/form.schema';

export type FormFieldsType = {
	name: keyof RegisterFormType;
	label: string;
	placeholder: string;
	type?: string;
};
