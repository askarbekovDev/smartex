import { Footer, Header } from '@/layouts';
import { IntroSection } from '@/modules/intro';
import { NewsSection } from '@/modules/news-section';
import { PinduoduoSection } from '@/modules/pinduoduo-section';
import { PopularQuestionsSection } from '@/modules/popular-questions-section/components/popular-question-section/PopularQuestionSection';
import { SearchSection } from '@/modules/search-section';

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
