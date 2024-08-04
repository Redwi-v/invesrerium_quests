import { Spiral } from '@/shared/images';
import { Footer } from '@/widgets/footer';
import FullPageSlider from '@/widgets/full-page-slider/ui/full-page-slider';
import { Header } from '@/widgets/header';
import { ListSlider } from '@/widgets/list-slider';
import { FC } from 'react';

interface MainPageViewProps {}

export const MainPageView: FC<MainPageViewProps> = () => {
	return (
		<main className='main'>
			<Header />
			<FullPageSlider />
			<ListSlider
				mainTitle='In progress'
				className='mb-[62px] border-b border-border'
			/>
			<ListSlider mainTitle='New Quests' />
			<Footer />
		</main>
	);
};
