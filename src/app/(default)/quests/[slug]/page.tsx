import { FC } from 'react';
import { QuestsPageView } from '@/views/quests-page-view';
import { QuestPageView } from '@/views/quest-page-view/ui/quest-page-view';
interface IPageProps {}

const Page: FC<IPageProps> = props => {
	const {} = props;

	return <QuestPageView />;
};

export default Page;
