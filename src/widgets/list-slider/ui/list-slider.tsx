'use client';
import { QuestCard } from '@/entities/quest';
import LikeButton from '@/features/like-button/ui/like-button';
import { useWindowSize } from '@/shared/hooks';
import { ArrowIcon, CoinIcon, CupIcon, XpIcon } from '@/shared/images';
import { Button, H2 } from '@/shared/ui-kit';
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
				<H2>{mainTitle}</H2>
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
						href='/quests'
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
					return <QuestCard title={title + index.toString()} />;
				})}
			</Slider>
		</div>
	);
};
