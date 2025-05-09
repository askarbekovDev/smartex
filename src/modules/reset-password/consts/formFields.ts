import { FormFieldsType } from '..';

export const FORM_FIELDS: FormFieldsType[] = [
	{ name: 'password', label: '*Пароль', placeholder: '*Пароль', type: 'password' },
	{
		name: 'confirmPassword',
		label: '*Повторите пароль',
		placeholder: '*Повторите пароль',
		type: 'password',
	},
] as const;
