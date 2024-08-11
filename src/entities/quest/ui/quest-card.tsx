'use client';
import LikeButton from '@/features/like-button/ui/like-button';
import { CoinIcon, CupIcon, XpIcon } from '@/shared/images';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useWindowSize } from '../../../shared/hooks/scripts/use-window-size';
import Link from 'next/link';
import { Participants } from '@/shared/ui-kit';
import { KeyIcon } from '@/shared/images/ui/key';
import { ExclamationMark } from '@/shared/images/ui/exclamation-mark';
import { cssIf } from '@/shared/utils';
interface IQuestCardProps {
	title: string;
	className?: string;
	completed?: boolean;
	level?: number | null;
	day?: number | null;
}

export const QuestCard: FC<IQuestCardProps> = props => {
	const { title, className, completed, level, day } = props;

	const windowSize = useWindowSize();

	const gradient1 =
		'linear-gradient(0deg, rgba(46,46,46,1) 0%, rgba(46,46,46,1) 60%, rgba(255,255,255,0) 100%)';
	const gradient2 = 'linear-gradient(0deg, #444444 0%, #444444 30%, rgba(255,255,255,0) 100%)';

	const [isHover, setIsHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className={` ${cssIf(
				className,
			)} relative hover rounded-3xl max-md:rounded-[18px] overflow-hidden`}
		>
			<LikeButton className='absolute z-50 right-3 top-3 left-auto max-md:h-6 max-md:w-6' />
			{level && (
				<div className='bg-absolute/800 bg-opacity-70 absolute z-50 inset-0 rounded-3xl max-md:rounded-[18px]'>
					<div
						className='mx-auto w-fit mt-[154px] p-[6px] z-40 bg-absolute/900 flex gap-2 
					rounded-[100px] items-center pr-3 font-semibold text-sm max-md:text-xs max-md:mt-[72px]'
					>
						<KeyIcon className='max-md:w-[18px] max-md:h-[18px]' />
						<span>Need 22 lvl</span>
					</div>
				</div>
			)}
			<Link
				href={'/quests/slug'}
				draggable={false}
				className='h-[486px] block rounded-3xl overflow-hidden max-md:h-auto max-md:rounded-[18px]'
			>
				<div
					style={{
						background: gradient1,
					}}
					className={`absolute inset-0 left-0 z-40`}
				/>
				<div
					style={{
						background: gradient2,
						transition: 'all .5s',
						opacity: isHover && !level ? 1 : 0,
					}}
					className={`absolute inset-0 left-0 z-40`}
				/>

				{day && (
					<div
						style={{
							transition: 'opacity .5s',
							opacity: isHover ? 0 : 1,
						}}
						className='absolute z-50 left-0 right-0 mx-auto w-fit 
					mt-[154px] p-[6px] bg-red flex gap-2 rounded-[100px] 
					items-center pr-3 font-semibold text-sm max-md:mt-[72px] max-md:text-xs'
					>
						<ExclamationMark className='max-md:w-[18px] max-md:h-[18px]' />
						<span>{day}d left</span>
					</div>
				)}

				<CoinIcon className='z-[100] absolute w-8 h-8 top-3 left-3 max-md:h-6 max-md:w-6' />
				<div className='relative w-full h-[200px] max-md:h-[104px] z-30'>
					<Image
						src={'/images/cardBg.jpg'}
						alt='bg'
						fill
						className='z-[1] '
					/>
				</div>
				<div className='p-5 pt-[4px] max-md:pt-[2px] max-md:p-[8px] z-40 relative'>
					<div className='flex justify-between items-center max-md:hidden'>
						<div className='flex gap-2'>
							<Avatar className='w-5 h-5' />
							<span className='text-blue/400 font-medium text-sm'>Сompany name</span>
						</div>
						<div className='flex'>
							<span className='font-semibold text-base'>190</span>
							<XpIcon className='ml-[6px]' />
						</div>
					</div>

					<h3 className='mt-2 font-semibold text-2xl max-md:text-xs'>
						{title.length > 37 ? title.split('', 37).join('') + '...' : title}
					</h3>

					<Participants borderColor={!isHover ? '#2E2E2E' : '#444444'} />
					<div className='flex gap-2 mt-4 max-md:hidden'>
						{Array.from(Array(10).keys()).map(index => {
							return (
								<span
									className={`w-full h-2 rounded-[50px] bg-absolute/100 bg-opacity-[0.07] block ${
										index === 0 ? '!bg-blue/400' : ''
									}`}
								/>
							);
						})}
					</div>
					<div className='mt-6 flex gap-2 max-md:mt-3'>
						<div
							className={`p-3 bg-blue/400 rounded-xl w-fit max-md:hidden ${
								completed ? '!bg-green/400' : ''
							}`}
						>
							<CupIcon />
						</div>
						<div
							className={`bg-absolute/100 bg-opacity-[0.07] rounded-xl w-full flex justify-center py-3 gap-3 max-md:px-2 ${
								completed ? '!bg-green/400 !bg-opacity-20' : ''
							}`}
						>
							<Image
								src={'/icons/nft1.png'}
								alt='nft'
								quality={100}
								width={windowSize.width < 768 ? 20 : 24}
								height={windowSize.width < 768 ? 20 : 24}
							/>
							<Image
								src={'/icons/nft2.png'}
								alt='nft'
								quality={100}
								width={windowSize.width < 768 ? 20 : 24}
								height={windowSize.width < 768 ? 20 : 24}
							/>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
