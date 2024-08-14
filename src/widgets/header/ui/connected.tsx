'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import LeftSide from './left-side';
import { CircleIcon, FireAnimateIcon, FireIcon } from '@/shared/images';
import Image from 'next/image';
import { Avatar } from '@/shared/ui-kit';
import { DesktopMenu } from './menu/desktop-menu';
import { MobileMenu } from './menu/mobile-menu';

interface ConnectedHeaderContentProps {}

const ConnectedHeaderContent: FC<ConnectedHeaderContentProps> = ({}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		const closeModal = () => {
			setMenuIsOpen(false);
		};
		window.addEventListener('scroll', closeModal);
		window.addEventListener('resize', closeModal);
		window.addEventListener('click', closeModal);

		return () => {
			window.removeEventListener('scroll', closeModal);
			window.removeEventListener('resize', closeModal);
			window.removeEventListener('click', closeModal);
		};
	}, []);

	return (
		<>
			<div className='flex items-center'>
				<div className='max-md:hidden flex items-center'>
					<div className='flex gap-2 mr-[30px] max-pc:mr-[22px] '>
						<span className='font-semibold text-base'>6</span>
						<FireAnimateIcon />
					</div>
					<span className='block h-4 w-[1px] mr-[32px] max-pc:mr-[22px] bg-absolute/100 opacity-15' />
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
				<button
					onClick={e => {
						e.stopPropagation();
						setMenuIsOpen(value => !value);
					}}
					className='flex items-center relative ml-[34px]'
				>
					<Avatar contentClassName=' hover:scale-105 transition' />
					<DesktopMenu isOpen={menuIsOpen} />
				</button>
				<MobileMenu />
			</div>
		</>
	);
};

export default ConnectedHeaderContent;
