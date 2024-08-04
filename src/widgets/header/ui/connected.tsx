'use client';
import { FC, useState } from 'react';
import LeftSide from './left-side';
import { CircleIcon, FireIcon } from '@/shared/images';
import Image from 'next/image';
import { Avatar } from '@/shared/ui-kit';
import { DesktopMenu } from './menu/desktop-menu';
import { MobileMenu } from './menu/mobile-menu';

interface ConnectedHeaderContentProps {}

const ConnectedHeaderContent: FC<ConnectedHeaderContentProps> = ({}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<>
			<div className='flex items-center'>
				<button
					onClick={() => setMenuIsOpen(value => !value)}
					className='flex items-center relative'
				>
					<div className='max-sm:hidden flex items-center'>
						<div className='flex gap-2 mr-[30px] max-md:mr-[22px] '>
							<span className='font-semibold text-base'>6</span>
							<Image
								alt='fire'
								src={'/gif/fire.gif'}
								width={24}
								height={24}
							/>
						</div>
						<span className='block h-4 w-[1px] mr-[32px] max-md:mr-[22px] bg-absolute/100 opacity-15' />
						<div className='flex items-center'>
							<Image
								src={'/icons/gradientCircle.png'}
								alt='circle'
								width={24}
								height={24}
								quality={100}
							/>
							<p className='font-semibold text-sm ml-3'>
								124
								<span className='opacity-50 ml-1'>AP</span>
							</p>
						</div>
					</div>

					<Avatar contentClassName='ml-[34px]' />
					<DesktopMenu
						className='max-md:hidden'
						isOpen={menuIsOpen}
					/>
				</button>
				<MobileMenu />
			</div>
		</>
	);
};

export default ConnectedHeaderContent;
