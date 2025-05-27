import { toast } from 'react-toastify';

export const showError = (err: unknown) => {
	if (typeof err === 'object' && err !== null && 'data' in err) {
		const data = (err as { data: { error: string } }).data;
		toast.error(data.error);
	} else if (err instanceof Error) {
		toast.error(err.message);
	} else {
		toast.error('Неизвестная ошибка');
	}
};

export const showSuccess = (message: string) => {
	toast.success(message);
};
