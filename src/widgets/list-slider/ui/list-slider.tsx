'use client';
import {QuestCard} from '@/entities/quest';
import {ArrowIcon} from '@/shared/images';
import {Button, H2} from '@/shared/ui-kit';
import {cssIf} from '@/shared/utils';
import {FC, useCallback, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

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
		<div className={`container mb-16 max-lg:mb-10 ${cssIf(className)}`}>
			<div className='flex justify-between items-center'>
				<H2>{mainTitle}</H2>
				<div className='flex'>
					<Button
						type='sm'
						color='gray'
						arrow='left'
						className='max-md:hidden'
						onClick={() => {handlePrev()}}
					/>
					<Button
						type='sm'
						color='gray'
						arrow='right'
						className='max-md:hidden ml-1'
						onClick={() => handleNext()}
					/>
					<Button
						type='sm'
						color='purple'
						className='ml-2'
						arrow='right'
						href='/quests'
					>
						<span>Show all</span>
					</Button>
				</div>
			</div>
			<Swiper
				className='mt-8 max-sm:!-mx-3 max-sm:!px-3 max-md:mt-6 active:cursor-grabbing'
				ref={swiperRef}
				breakpoints={{
					1328: {
						slidesPerView: 4,
						spaceBetween: 24,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					0: {
						slidesPerView: 'auto',
						spaceBetween: 12,
					},
				}}
			>
				{Array.from(Array(10).keys()).map(index => {
					return (
						<SwiperSlide key={index} className='max-md:max-w-[164px]'>
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
