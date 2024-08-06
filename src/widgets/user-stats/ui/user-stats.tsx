import { CupIcon, FireIcon, StarIcon } from '@/shared/images';
import { Avatar, Button, IconBox } from '@/shared/ui-kit';
import Image from 'next/image';
import { FC } from 'react';
interface IUserStatsProps {}

const UserStats: FC<IUserStatsProps> = props => {
	const {} = props;

	return (
		<div className='custom-container mt-[42px]'>
			<div className='border-b border-border pb-[42px] flex justify-between items-center'>
				<div className='flex gap-[24px] items-center'>
					<Avatar
						className='w-[86px] h-[86px]'
						contentClassName='w-[86px] h-[86px]'
						hideLevelLine
						levelClassName='w-[32px] h-[32px] !right-0 !bottom-0 border-4 border-bg'
					/>
					<div className='w-[196px]'>
						<span className='block font-semibold text-lg pb-1 border-b border-border mb-1'>
							0x68ae...eB2E
						</span>
						<div className='flex justify-between opacity-50 font-medium text-sm'>
							<span>0 xp</span> <span>100xp</span>
						</div>
						<div className='bg-absolute/700 h-2 rounded-[100px] mt-1 overflow-hidden'>
							<span className='block w-[40%] h-full bg-blue/400'></span>
						</div>
					</div>
				</div>
				<div className='flex gap-2'>
					<div className='bg-absolute/800 p-4 rounded-[18px] flex'>
						<div className='flex  items-end flex-col gap-[2px]'>
							<span className='font-semibold text-sm opacity-50'>GM Streak</span>
							<span className='font-bold text-lg '>
								6 <span className='pl-1 opacity-50 font-medium text-lg'>d</span>
							</span>
						</div>
						<div className='ml-4 flex gap-2'>
							<IconBox className='max-md:hidden'>
								<FireIcon />
							</IconBox>
							<Button className='bg-green/400'>
								<span>GM</span>{' '}
								<Image
									className='ml-2'
									src={'/gif/hand.gif'}
									alt='hand'
									width={24}
									height={24}
								/>
							</Button>
						</div>
					</div>
					<div className='bg-absolute/800 p-4 rounded-[18px] flex'>
						<div className='flex  items-end flex-col gap-[2px]'>
							<span className='font-semibold text-sm opacity-50'>Quests</span>
							<span className='font-bold text-lg '>12</span>
						</div>
						<div className='ml-4 flex gap-2 max-[840px]:hidden'>
							<IconBox>
								<StarIcon />
							</IconBox>
						</div>
					</div>
					<div className='bg-absolute/800 p-4 rounded-[18px] flex max-lg:hidden'>
						<div className='flex  items-end flex-col gap-[2px]'>
							<span className='font-semibold text-sm opacity-50'>Rewards</span>
							<span className='font-bold text-lg '>$ 125.09</span>
						</div>
						<div className='ml-4 flex gap-2'>
							<IconBox>
								<CupIcon />
							</IconBox>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserStats;
