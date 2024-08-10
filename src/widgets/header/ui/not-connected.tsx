import { FC } from 'react';
import LeftSide from './left-side';
import { Button } from '@/shared/ui-kit';
import { MobileMenu } from './menu/mobile-menu';

interface NotConnectedHeaderContentProps {
	setUser: (val: boolean) => void;
}

const NotConnectedHeaderContent: FC<NotConnectedHeaderContentProps> = ({ setUser }) => {
	return (
		<div className='flex'>
			<Button
				buttonStyle='purple'
				className=''
				onClick={() => setUser(true)}
			>
				Connect Wallet
			</Button>
			<MobileMenu />
		</div>
	);
};

export default NotConnectedHeaderContent;
