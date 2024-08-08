import { QuestsPageView } from '@/views/quests-page-view';
import UserStats from '@/widgets/user-stats/ui/user-stats';
import { NextPage } from 'next';
interface IPageProps {}

const Page: NextPage = props => {
	const {} = props;

	return (
		<>
			<div className='max-md:hidden'>
				<UserStats />
			</div>
			<QuestsPageView />
		</>
	);
};

export default Page;
