import ProfilePageView from '@/views/profile-page-view/ui/profile-page-view';
import { NextPage } from 'next';
import { FC } from 'react';
interface IPageProps {}

const Page: NextPage<IPageProps> = props => {
	const {} = props;

	return <ProfilePageView />;
};

export default Page;
