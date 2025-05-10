import { Footer, Header } from '@/layouts';
import { IntroSection, PinduoduoSection, PopularQuestionsSection, SearchSection } from '@/modules';
import { NewsSection } from '@/modules/news-section';

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
