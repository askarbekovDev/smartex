export type New = {
	date: string;
	id: number;
	img: string;
	text: string;
	title: string;
};

export type News = {
	newsItems: New[];
};
