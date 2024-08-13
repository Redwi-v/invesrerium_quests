'use client';
import { QuestCard } from '@/entities/quest';
import LikeButton from '@/features/like-button/ui/like-button';
import { useWindowSize } from '@/shared/hooks';
import { ArrowIcon, CoinIcon, CupIcon, XpIcon } from '@/shared/images';
import { Button, H2 } from '@/shared/ui-kit';
import { cssIf } from '@/shared/utils';
import { Avatar, AvatarGroup } from '@mui/material';
import Image from 'next/image';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ListSliderProps {
	mainTitle: string;
	className?: string;
}

export const ListSlider: FC<ListSliderProps> = ({ mainTitle, className }) => {
	const title = 'Celosphere Summer: Mint “Ego” by Mad in Pixel';
	const swiperRef = useRef<any>(null);

	const handlePrev = useCallback(() => {
		swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex - 2);
	}, [swiperRef, swiperRef?.current?.activeIndex]);

	const handleNext = useCallback(() => {
		swiperRef.current.swiper.slideTo(swiperRef.current.swiper.activeIndex + 2);
	}, [swiperRef, swiperRef?.current?.activeIndex]);

	return (
		<div className={`custom-container pb-16 max-md:pb-8 ${cssIf(className)}`}>
			<div className='flex justify-between items-center'>
				<H2>{mainTitle}</H2>
				<div className='flex'>
					<Button
						buttonStyle='gray'
						onClick={() => {
							handlePrev();
						}}
						className='bg-tone/200 rounded-xl !p-[10px] min-w-0 max-md:hidden'
					>
						<ArrowIcon />
					</Button>
					<Button
						buttonStyle='gray'
						onClick={() => handleNext()}
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
			<Swiper
				className='mt-8 overflow-hidden -ml-6 max-md:-ml-3  max-md:mt-6 cursor-pointer'
				ref={swiperRef}
				slidesPerView={2.12}
				spaceBetween={12}
				breakpoints={{
					1296: {
						slidesPerView: 4,
						spaceBetween: 24,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
				}}
			>
				{Array.from(Array(10).keys()).map(index => {
					return (
						<SwiperSlide className=''>
							<QuestCard
								level={index === 2 ? 2 : null}
								day={index === 1 ? 2 : null}
								title={title + index.toString()}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
