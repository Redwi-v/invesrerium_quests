'use client';
import { useWindowSize } from '@/shared/hooks';
import {
	BurgerMenu,
	CrossIcon,
	CupIcon,
	FireIcon,
	HandAnimateIcon,
	StarIcon,
} from '@/shared/images';
import { Avatar, Button } from '@/shared/ui-kit';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const path = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [path]);

	useEffect(() => {
		const closeModal = () => {
			setIsOpen(false);
		};
		const closeModalScroll = () => {
			if (window?.innerWidth < 768) return;
			setIsOpen(false);
		};
		window.addEventListener('scroll', closeModalScroll);
		window.addEventListener('resize', closeModal);

		return () => {
			window.removeEventListener('scroll', closeModalScroll);
			window.removeEventListener('resize', closeModal);
		};
	}, []);

	return (
		<div className='max-pc:block hidden'>
			<button
				onClick={() => setIsOpen(value => !value)}
				className='p-3 bg-absolute/100 bg-opacity-[0.07] rounded-xl ml-3 max-md:p-[10px] max-md:ml-3'
			>
				{isOpen ? (
					<CrossIcon className='max-md:w-5 max-md:h-5' />
				) : (
					<BurgerMenu className='max-md:w-5 max-md:h-5' />
				)}
			</button>

			<div
				onClick={() => setIsOpen(false)}
				className={` left-0 right-0 bottom-0 top-0 fixed -z-10 hidden ${isOpen ? '!block' : ''}`}
			/>

			<div
				className={`fixed left-0 ring-0 w-full bg-absolute/800 top-[84px] hidden max-md:bottom-[0] max-md:top-[0] overflow-auto ${
					isOpen ? 'max-pc:block' : ''
				}`}
			>
				<div className='custom-container pt-3 items-center hidden max-md:flex'>
					<Avatar />
					<span className='block ml-5 mr-6 w-[1px] h-4 bg-border' />
					<div className='flex items-center mr-auto'>
						<Image
							src={'/icons/gradientCircle.png'}
							alt='circle'
							width={24}
							height={24}
						/>
						<span className='ml-3 text-sm font-semibold'>124</span>
						<span className='text-sm font-semibold opacity-50 ml-1'>AP</span>
					</div>
					<button
						onClick={() => setIsOpen(value => !value)}
						className='p-3 bg-absolute/100 bg-opacity-[0.07] rounded-xl ml-3 max-md:p-[10px] max-md:ml-3 '
					>
						{isOpen ? (
							<CrossIcon className='max-md:w-5 max-md:h-5' />
						) : (
							<BurgerMenu className='max-md:w-5 max-md:h-5' />
						)}
					</button>
				</div>
				<div className='flex gap-6 custom-container py-6 max-md:flex-col-reverse max-md:gap-0'>
					<div className='flex flex-col w-full'>
						<Link
							href={'/quests'}
							replace
							className='py-[14px] px-5 bg-absolute/100 bg-opacity-[0.07] rounded-xl w-full block'
						>
							Quests
						</Link>
					</div>

					<div className='flex flex-col w-full max-md:mb-6 max-md:pb-6 max-md:border-b max-md:border-border'>
						<ul className='flex flex-col gap-6 max-md:flex-row max-md:gap-2'>
							<li className='flex gap-4 max-md:hidden'>
								<span className='p-[14px] max-w-fit rounded-xl block bg-absolute/100 bg-opacity-[0.07]'>
									<Image
										src={'/icons/gradientCircle.png'}
										alt='circle'
										width={24}
										height={24}
										quality={100}
									/>
								</span>
								<div className='flex flex-col justify-between'>
									<span className='font-semibold text-sm opacity-50'>AP</span>
									<span className='font-semibold text-lg'>124</span>
								</div>
							</li>
							<li
								className='flex gap-4 max-md:bg-absolute/100 max-md:bg-opacity-[0.07] max-md:w-full
                max-md:justify-center max-md:items-center
                max-md:text-center max-md:gap-[2px] max-md:py-[14px] rounded-2xl'
							>
								<span className='p-[14px] max-w-fit rounded-xl block bg-blue/400 max-md:hidden'>
									<FireIcon />
								</span>
								<div className='flex flex-col justify-between max-md:gap-[2px]'>
									<span className='font-semibold text-sm opacity-50'>GM Streak</span>
									<span className='font-semibold text-lg'>
										124
										<span className='font-medium opacity-50'> d</span>
									</span>
								</div>
							</li>
							<li
								className='flex gap-4 max-md:bg-absolute/100 max-md:bg-opacity-[0.07] max-md:w-full
                max-md:justify-center max-md:items-center
                max-md:text-center max-md:gap-[2px] max-md:py-[14px] rounded-2xl'
							>
								<span className='p-[14px] max-w-fit rounded-xl block bg-blue/400 max-md:hidden'>
									<StarIcon />
								</span>
								<div className='flex flex-col justify-between max-md:gap-[2px]'>
									<span className='font-semibold text-sm opacity-50'>Quests</span>
									<span className='font-semibold text-lg'>12</span>
								</div>
							</li>
							<li
								className='flex gap-4 max-md:bg-absolute/100 max-md:bg-opacity-[0.07] max-md:w-full
                max-md:justify-center max-md:items-center
                max-md:text-center max-md:gap-[2px] max-md:py-[14px] rounded-2xl'
							>
								<span className='p-[14px] max-w-fit rounded-xl block bg-blue/400 max-md:hidden'>
									<CupIcon />
								</span>
								<div className='flex flex-col justify-between max-md:gap-[2px]'>
									<span className='font-semibold text-sm opacity-50'>Rewards</span>
									<span className='font-semibold text-lg'>$ 125.09</span>
								</div>
							</li>
						</ul>
						<Button
							buttonStyle='green'
							className='w-full mt-6 py-[14px]'
						>
							<span className='mr-2'>GM</span>
							<HandAnimateIcon />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
