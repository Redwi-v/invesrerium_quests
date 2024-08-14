'use client';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowIcon } from '../../../shared/images/ui/arrow';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { Button, H1 } from '@/shared/ui-kit';
import { CoinIcon, CupIcon, Spiral, XpIcon } from '@/shared/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

interface FullPageSliderProps {}

const FullPageSlider: FC<FullPageSliderProps> = () => {
	const swiperRef = useRef<any>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = useCallback(() => {
		swiperRef.current.swiper.slidePrev();
	}, [swiperRef, swiperRef?.current?.activeIndex]);

	const handleNext = useCallback(() => {
		swiperRef.current.swiper.slideNext();
	}, [swiperRef, swiperRef?.current?.activeIndex]);

	const handleGoTo = (index: number) => swiperRef?.current?.swiper?.slideTo(index);

	return (
		<div className='overflow-hidden relative'>
			<Spiral className='absolute -rotate-90 -right-[213px] top-[12px] max-pc:hidden' />
			<div className='custom-container mt-[42px] pb-[62px] relative max-md:!mt-6'>
				<Spiral className='absolute rotate-90 -left-[359px] -top-[44px] max-pc:hidden' />

				<div className='flex justify-between'>
					<H1>Featured</H1>
					<div className='flex'>
						<Button
							buttonStyle='gray'
							onClick={handlePrev}
							className='bg-absolute/100 bg-opacity-[0.07] min-w-0 rounded-xl !p-[10px] max-md:hidden '
						>
							<ArrowIcon />
						</Button>
						<Button
							buttonStyle='gray'
							onClick={handleNext}
							className='bg-absolute/100 bg-opacity-[0.07] min-w-0 rounded-xl !p-[10px] ml-1 max-md:hidden'
						>
							<ArrowIcon className='rotate-180' />
						</Button>

						<div className='ml-2 bg-absolute/100 bg-opacity-[0.07] py-4 px-6 rounded-[50px] flex gap-2'>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full transition-all bg-opacity-[0.72] opacity-[.3] ${
									activeIndex === 0 ? '!bg-opacity-100 scale-[1.1] !opacity-100' : ''
								}`}
								onClick={() => handleGoTo(0)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full transition-all bg-opacity-[.72] opacity-[.3] ${
									activeIndex === 1 ? '!bg-opacity-100 scale-[1.1] !opacity-100' : ''
								}`}
								onClick={() => handleGoTo(1)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full transition-all bg-opacity-[.72] opacity-[.3] ${
									activeIndex === 2 ? '!bg-opacity-100 scale-[1.1] !opacity-100' : ''
								}`}
								onClick={() => handleGoTo(2)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full transition-all bg-opacity-[.72] opacity-[.3] ${
									activeIndex === 3 ? '!bg-opacity-100 scale-[1.1] !opacity-100' : ''
								}`}
								onClick={() => handleGoTo(3)}
							/>
						</div>
					</div>
				</div>
				<Swiper
					ref={swiperRef}
					className='mt-8 overflow-hidden !rounded-3xl max-md:mt-6 active:cursor-grabbing'
					modules={[Autoplay]}
					spaceBetween={24}
					rewind
					speed={600}
					autoplay={{
						delay: 6000,
						disableOnInteraction: false,
					}}
					onActiveIndexChange={() => {
						setActiveIndex(swiperRef?.current?.swiper?.activeIndex);
					}}
				>
					{Array.from(Array(4).keys()).map(index => {
						return (
							<SwiperSlide
								key={index}
								className='bg-absolute/800 !rounded-3xl overflow-hidden !h-auto'
							>
								<div className='flex h-full max-md:flex-col-reverse max-md:max-md:h-[100%]'>
									<div
										className='max-pc:px-[32px] w-1/2 px-[62px] 
									pb-[106px] pt-[106px] max-lg:py-20 
									max-lg:px-6 max-md:p-4 max-md:w-full max-md:flex max-md:flex-col max-md:h-[100%]'
									>
										<div className='flex justify-between border-b border-border pb-3 items-center'>
											<div className='p-[6px] pr-[16px] bg-absolute/100 bg-opacity-[.07] flex items-center rounded-[100px]'>
												<CoinIcon />
												<span className='ml-2 text-sm font-medium'>Blockchain</span>
											</div>

											<div className='flex max-w-[54.5%] max-lg:max-w-[45%] truncate items-center gap-2 font-medium text-sm text-blue/400'>
												<Avatar className='w-6 h-6' />
												<span className='truncate'>
													Company name {index !== 0 ? index : 'name Company name'}
												</span>
											</div>
										</div>

										<div className='mt-3 mb-auto '>
											<h2 className='text-5xl leading-[60px] max-lg:leading-[45px] font-bold max-lg:text-4xl'>
												Bridge to Taiko
											</h2>
											<p className='opacity-50 mt-4 text-base'>
												Start your Taiko journey by bridging ETH to its permissionless,
												Ethereum-based rollup.{' '}
												{index === 0 &&
													'dfkdjfldk jfdlkf jdlkfj dlkfjd lkfj dklfj dklfj dlfkjd lkfjd lkfjdlf kjdfkld jfl'}
											</p>
										</div>

										<div className='mt-[42px] flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-3 max-lg:mt-6'>
											<Button
												buttonStyle='purple'
												className='flex gap-2 items-center max-lg:w-full !px-[10px] !pl-[18px] !rounded-xl'
											>
												<span className='text-base font-semibold'>Begin</span>
												<ArrowIcon className='rotate-180' />
											</Button>
											<div className='flex gap-1 max-lg:w-full'>
												<div className='p-3 bg-blue/400 rounded-2xl'>
													<CupIcon />
												</div>
												<div className='py-3 px-4 rounded-2xl bg-absolute/100 bg-opacity-[0.07] flex items-center gap-3 max-lg:w-full max-lg:justify-center'>
													<Image
														src={'/icons/nft1.png'}
														alt='nft'
														width={24}
														height={24}
														quality={100}
													/>
													<Image
														src={'/icons/nft2.png'}
														alt='nft'
														width={24}
														height={24}
														quality={100}
													/>
													<span className='block h-4 w-[1px] bg-absolute/100 bg-opacity-15' />

													<CoinIcon className='w-6 h-6' />
													<div className='flex items-center gap-[6px]'>
														<XpIcon /> <span className='font-semibold text-sm'>180 XP</span>{' '}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='w-1/2 relative max-md:w-full  max-md:!min-h-[200px]'>
										<Image
											src={'/images/Banner.jpg'}
											alt='banner'
											fill
											className='object-cover'
											quality={100}
										/>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default FullPageSlider;
