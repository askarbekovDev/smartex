import {
	IntroSection,
	NewsBlock,
	PinduoduoBlock,
	PopularQuestionsBlock,
	SearchSection,
} from '@/modules';

export default function Home() {
	return (
		<>
			<IntroSection />
			<SearchSection />
			<PinduoduoBlock />
			<NewsBlock />
			<PopularQuestionsBlock />
			<hr />
		</>
	);
}
