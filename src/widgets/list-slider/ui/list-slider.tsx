'use client';
import { QuestCard } from '@/entities/quest';
import LikeButton from '@/features/like-button/ui/like-button';
import { useWindowSize } from '@/shared/hooks';
import { ArrowIcon, CoinIcon, CupIcon, XpIcon } from '@/shared/images';
import { Button, H2 } from '@/shared/ui-kit';
import { cssIf } from '@/shared/utils';
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
		infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		afterChange: () => setUpdateCount(updateCount),
		beforeChange: (current, next) => setSlideIndex(next),

		responsive: [
			{
				breakpoint: 1296,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.15,
					slidesToScroll: 2,
				},
			},
		],
	};

	const sliderNext = () => sliderRef.current && slideIndex + 2 < 9 && sliderRef.current.slickNext();
	const sliderPrev = () =>
		sliderRef.current && slideIndex - 2 >= 0 && sliderRef.current.slickPrev();
	const sliderGoTo = (index: number) => sliderRef.current && sliderRef.current.slickGoTo(index);

	console.log(sliderRef);

	const title = 'Celosphere Summer: Mint “Ego” by Mad in Pixel';

	return (
		<div className={`custom-container pb-16 max-md:pb-8 ${cssIf(className)}`}>
			<div className='flex justify-between'>
				<H2>{mainTitle}</H2>
				<div className='flex'>
					<Button
						buttonStyle='gray'
						onClick={sliderPrev}
						className='bg-tone/200 rounded-xl !p-[10px] min-w-0 max-md:hidden'
					>
						<ArrowIcon />
					</Button>
					<Button
						buttonStyle='gray'
						onClick={sliderNext}
						className='bg-tone/200 rounded-xl !p-[10px] ml-1 min-w-0 max-md:hidden'
					>
						<ArrowIcon className='rotate-180' />
					</Button>
					<Button
						buttonStyle='purple'
						size='small'
						className='flex items-center gap-1 px-3 py-[10px] pl-[12px] pr-[8px] ml-2'
						href='/quests'
					>
						<span className='text-sm font-semibold'>Show all</span>
						<ArrowIcon className='rotate-180' />
					</Button>
				</div>
			</div>
			<Slider
				className='mt-8 overflow-hidden -ml-6 max-md:-ml-3  max-md:mt-6 cursor-pointer'
				{...settings}
				ref={sliderRef}
			>
				{Array.from(Array(10).keys()).map(index => {
					return (
						<li className='pl-6 max-md:pl-3'>
							<QuestCard
								level={index === 2 ? 2 : null}
								day={index === 1 ? 2 : null}
								title={title + index.toString()}
							/>
						</li>
					);
				})}
			</Slider>
		</div>
	);
};
