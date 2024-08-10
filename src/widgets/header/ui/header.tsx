'use client';
import { FC, use, useState } from 'react';
import ConnectedHeaderContent from './connected';
import NotConnectedHeaderContent from './not-connected';
import LeftSide from './left-side';
interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
	const [user, setUser] = useState(false);

	return (
		<div className='bg-absolute/800 py-[14px] max-md:py-[10px] fixed !top-0  !left-0 !ring-0 w-full min-h-[84px] max-md:min-h-[60px] z-20'>
			<div className='custom-container flex items-center'>
				<div className='flex justify-between w-full items-center h-full'>
					<LeftSide />
					{user && <ConnectedHeaderContent />}
					{!user && <NotConnectedHeaderContent setUser={setUser} />}
				</div>
			</div>
		</div>
	);
};
