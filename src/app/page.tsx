import { Footer, Header } from '@/layouts';
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
			<Header />
			<IntroSection />
			<SearchSection />
			<PinduoduoSection />
			<NewsSection />
			<PopularQuestionsSection />
			<Footer />
		</>
	);
}
