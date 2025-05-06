import { FormFields } from '..';

export const FORM_FIELDS: FormFields[] = [
	{ name: 'email', label: '*Почта', placeholder: '*E-mail адрес', type: 'email' },
	{ name: 'password', label: '*Пароль', placeholder: '*Пароль', type: 'password' },
] as const;
