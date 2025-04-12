import {
	IntroSection,
	NewsSection,
	PinduoduoSection,
	PopularQuestionsSection,
	SearchSection,
} from '@/modules';

export default function Home() {
	return (
		<>
			<IntroSection />
			<SearchSection />
			<PinduoduoSection />
			<NewsSection />
			<PopularQuestionsSection />
			<hr />
		</>
	);
}
