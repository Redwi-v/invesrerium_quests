import ProfilePageEditView from '@/views/profile-page-view/ui/profile-page-edit-view';
import { NextPage } from 'next';
import { FC } from 'react';
interface IPageProps {}

const Page: NextPage<IPageProps> = props => {
	const {} = props;

	return <ProfilePageEditView />;
};

export default Page;
