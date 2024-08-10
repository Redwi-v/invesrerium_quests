import { FireAnimateIcon } from '@/shared/images/ui/fire-animate';
import { Button } from '@/shared/ui-kit';
import { LinkWithBorder } from '@/shared/ui-kit/link';
import { FC } from 'react';
interface IPageProps {}

const Page: FC<IPageProps> = props => {
	const {} = props;

	const pages: {
		href: string;
		title: string;
		style?: 'gray' | 'green' | 'purple';
	}[] = [
		{
			href: '/',
			title: 'Main "/"',
		},
		{
			href: '/quests',
			title: 'Quests "/quests"',
		},
		{
			href: '/quests/slag',
			title: 'Quest "/quests/slag"',
		},
		{
			href: '/profile',
			title: 'Profile "/quests"',
		},
		{
			href: '/profile/edit',
			title: 'Profile "/quests/edit"',
		},
		{
			href: '/referrals',
			title: 'Referrals "/referrals"',
			style: 'gray',
		},
	];

	return (
		<div className='custom-container py-8'>
			<span className='mb-2 block'>pages: {pages.length}/15</span>
			<ul className='grid grid-cols-3  gap-4 '>
				{pages.map(item => (
					<li>
						<Button
							buttonStyle={item.style || 'green'}
							className='w-full'
							href={item.href}
						>
							{item.title}
						</Button>
					</li>
				))}
			</ul>

			<div className='mt-4 max-w-[100px]'>
				<LinkWithBorder />
			</div>
			<FireAnimateIcon />
		</div>
	);
};

export default Page;
