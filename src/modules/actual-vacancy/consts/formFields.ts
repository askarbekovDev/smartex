import { IVacancyFormFields } from '../types/vacancyFormFields';

export const FIELDS: IVacancyFormFields[] = [
	{ name: 'fullName', label: '*Ф.И.О', placeholder: '*Ф.И.О', type: 'text' },
	{ name: 'email', label: '*Электронный адрес', placeholder: '*Электронный адрес', type: 'text' },
	{ name: 'phoneNumber', label: '*Номер телефона', placeholder: '*Номер телефона', type: 'text' },
];
