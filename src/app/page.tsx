import {
	IntroBlock,
	NewsBlock,
	PinduoduoBlock,
	PopularQuestionsBlock,
	SearchSection,
} from '@/modules';

export default function Home() {
	return (
		<>
			<IntroBlock />
			<SearchSection />
			<PinduoduoBlock />
			<NewsBlock />
			<PopularQuestionsBlock />
			<hr />
		</>
	);
}
