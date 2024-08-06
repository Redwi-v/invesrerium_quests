import { Spiral } from '@/shared/images';
import { Footer } from '@/widgets/footer';
import FullPageSlider from '@/widgets/full-page-slider/ui/full-page-slider';
import { Header } from '@/widgets/header';
import { ListSlider } from '@/widgets/list-slider';
import UserStats from '@/widgets/user-stats/ui/user-stats';
import { FC } from 'react';

interface MainPageViewProps {}

export const MainPageView: FC<MainPageViewProps> = () => {
	return (
		<main className='main'>
			<Header />
			<div className='max-md:hidden'>
				<UserStats />
			</div>
			<FullPageSlider />
			<ListSlider
				mainTitle='In progress'
				className=''
			/>
			<div className='custom-container'>
				<span className='mb-[62px] border-b border-border block max-[670px]:mb-8'></span>
			</div>
			<ListSlider mainTitle='New Quests' />
			<Footer />
		</main>
	);
};
