'use client';
import LikeButton from '@/features/like-button/ui/like-button';
import { CoinIcon, CupIcon, XpIcon } from '@/shared/images';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { useWindowSize } from '../../../shared/hooks/scripts/use-window-size';
import Link from 'next/link';
import { Participants } from '@/shared/ui-kit';
interface IQuestCardProps {
	title: string;
	className?: string;
	completed?: boolean;
}

export const QuestCard: FC<IQuestCardProps> = props => {
	const { title, className, completed } = props;

	const windowSize = useWindowSize();

	return (
		<div className={`pl-6 max-[670px]:pl-3 ${className}`}>
			<div className='h-[486px] bg-absolute/800 rounded-3xl overflow-hidden max-[670px]:h-auto max-[670px]:rounded-[18px]'>
				<div className='relative w-full h-[200px] max-[670px]:h-[104px]'>
					<CoinIcon className='z-10 absolute w-8 h-8 top-3 left-3 max-[670px]:h-6 max-[670px]:w-6' />
					<LikeButton className='absolute z-10 right-3 top-3 left-auto max-[670px]:h-6 max-[670px]:w-6' />
					<Image
						src={'/images/cardBg.jpg'}
						alt='bg'
						fill
						className='z-[1] '
					/>
				</div>
				<div className='p-5 pt-[4px] max-[670px]:pt-[2px] max-[670px]:p-[8px]'>
					<div className='flex justify-between items-center max-[670px]:hidden'>
						<div className='flex gap-2'>
							<Avatar className='w-5 h-5' />
							<span className='text-blue/400 font-medium text-sm'>Сompany name</span>
						</div>
						<div className='flex'>
							<span className='font-semibold text-base'>190</span>
							<XpIcon className='ml-[6px]' />
						</div>
					</div>

					<Link href={'/quests/slug'}>
						<h3 className='mt-2 font-semibold text-2xl max-[670px]:text-xs'>
							{title.length > 37 ? title.split('', 37).join('') + '...' : title}
						</h3>
					</Link>
					<Participants />
					<div className='flex gap-2 mt-4 max-[670px]:hidden'>
						{Array.from(Array(10).keys()).map(index => {
							return (
								<span
									className={`w-full h-2 rounded-[50px] bg-tone/200 block ${
										index === 0 ? '!bg-blue/400' : ''
									}`}
								/>
							);
						})}
					</div>
					<div className='mt-6 flex gap-2 max-[670px]:mt-3'>
						<div
							className={`p-3 bg-blue/400 rounded-xl w-fit max-[670px]:hidden ${
								completed && '!bg-green/400'
							}`}
						>
							<CupIcon />
						</div>
						<div
							className={`bg-tone/200 rounded-xl w-full flex justify-center py-3 gap-3  max-[670px]:px-2 ${
								completed && '!bg-green/400 !bg-opacity-20'
							}`}
						>
							<Image
								src={'/icons/nft1.png'}
								alt='nft'
								width={windowSize.width < 670 ? 20 : 24}
								height={windowSize.width < 670 ? 20 : 24}
							/>
							<Image
								src={'/icons/nft2.png'}
								alt='nft'
								width={windowSize.width < 670 ? 20 : 24}
								height={windowSize.width < 670 ? 20 : 24}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
