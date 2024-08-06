'use client';
import LikeButton from '@/features/like-button/ui/like-button';
import { useWindowSize } from '@/shared/hooks';
import { ArrowIcon, CoinIcon, CupIcon, XpIcon } from '@/shared/images';
import { Button } from '@/shared/ui-kit';
import { Avatar, AvatarGroup } from '@mui/material';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

interface ListSliderProps {
	mainTitle: string;
	className?: string;
}

export const ListSlider: FC<ListSliderProps> = ({ mainTitle, className }) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [updateCount, setUpdateCount] = useState(0);
	let sliderRef = useRef<Slider | null>(null);

	const settings: Settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		afterChange: () => setUpdateCount(updateCount + 1),
		beforeChange: (current, next) => setSlideIndex(next),
		responsive: [
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 998,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	const sliderNext = () => sliderRef.current && sliderRef.current.slickNext();
	const sliderPrev = () => sliderRef.current && sliderRef.current.slickPrev();
	const sliderGoTo = (index: number) => sliderRef.current && sliderRef.current.slickGoTo(index);

	const windowSize = useWindowSize();

	const title = 'Celosphere Summer: Mint “Ego” by Mad in Pixel';

	return (
		<div className={`custom-container pb-16 max-[670px]:pb-8 ${className}`}>
			<div className='flex justify-between'>
				<h2 className='font-bold text-3xl max-[670px]:text-2xl'>{mainTitle}</h2>
				<div className='flex'>
					<button
						onClick={sliderPrev}
						className='bg-tone/200 rounded-xl p-[10px] max-[670px]:hidden'
					>
						<ArrowIcon />
					</button>
					<button
						onClick={sliderNext}
						className='bg-tone/200 rounded-xl p-[10px] ml-1 max-[670px]:hidden'
					>
						<ArrowIcon className='rotate-180' />
					</button>
					<Button
						size='small'
						className='flex items-center gap-1 px-3 py-[10px] ml-2'
					>
						<span className='text-sm font-semibold'>Show all</span>
						<ArrowIcon className='rotate-180' />
					</Button>
				</div>
			</div>
			<Slider
				className='mt-8 overflow-hidden -ml-6 max-[670px]:-ml-3  max-[670px]:mt-6'
				{...settings}
				ref={sliderRef}
			>
				{Array.from(Array(10).keys()).map(index => {
					return (
						<div className='pl-6 max-[670px]:pl-3'>
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

									<h3 className='mt-2 font-semibold text-2xl max-[670px]:text-xs'>
										{title.length > 37 ? title.split('', 37).join('') + '...' : title}
									</h3>

									<div className='flex gap-2 mt-6 max-[670px]:mt-3'>
										<div className='flex items-center'>
											<Avatar className='w-[43px] h-[43px] border-[3px] -ml-[3px] border-absolute/800 max-[670px]:w-[34px] max-[670px]:h-[34px]' />
											<Avatar className='w-[43px] h-[43px] border-[3px] -ml-5 border-absolute/800 max-[670px]:w-[34px] max-[670px]:h-[34px]' />
										</div>
										<div className='flex flex-col gap-[2px]'>
											<span className='font-medium text-sm opacity-50 max-[670px]:text-xs'>
												Participants
											</span>
											<span className='font-semibold text-base max-[670px]:text-xs'>
												126K / 256K
											</span>
										</div>
									</div>
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
										<div className='p-3 bg-blue/400 rounded-xl w-fit max-[670px]:hidden'>
											<CupIcon />
										</div>
										<div className='bg-tone/200 rounded-xl w-full flex justify-center py-3 gap-3  max-[670px]:px-2'>
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
				})}
			</Slider>
		</div>
	);
};
