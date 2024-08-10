'use client';
import { BurgerMenu, CrossIcon, CupIcon, FireIcon, StarIcon } from '@/shared/images';
import { Avatar, Button } from '@/shared/ui-kit';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='hidden max-pc:block max-pc:!hidden'>
			<button
				onClick={() => setIsOpen(value => !value)}
				className='p-3 bg-tone/200 rounded-xl ml-3 max-md:p-[10px] max-md:ml-3'
			>
				{isOpen ? (
					<CrossIcon className='max-md:w-5 max-md:h-5' />
				) : (
					<BurgerMenu className='max-md:w-5 max-md:h-5' />
				)}
			</button>

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
						className='p-3 bg-tone/200 rounded-xl ml-3 max-md:p-[10px] max-md:ml-3 '
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
							href={'/questions'}
							className='py-[14px] px-5 bg-tone/200 rounded-xl w-full block'
						>
							Quests
						</Link>
					</div>

					<div className='flex flex-col w-full max-md:mb-6 max-md:pb-6 max-md:border-b max-md:border-border'>
						<ul className='flex flex-col gap-6 max-md:flex-row max-md:gap-2'>
							<li className='flex gap-4 max-md:hidden'>
								<span className='p-[14px] max-w-fit rounded-xl block bg-tone/200'>
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
								className='flex gap-4 max-md:bg-tone/200 max-md:w-full
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
								className='flex gap-4 max-md:bg-tone/200 max-md:w-full
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
								className='flex gap-4 max-md:bg-tone/200 max-md:w-full
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
							className='w-full mt-6'
						>
							<span className='mr-2'>GM</span>
							<Image
								src={'/gif/hand.gif'}
								alt='hand'
								width={24}
								height={24}
							/>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
