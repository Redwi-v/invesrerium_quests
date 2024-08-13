'use client';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowIcon } from '../../../shared/images/ui/arrow';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { Button, H1 } from '@/shared/ui-kit';
import { CoinIcon, CupIcon, Spiral, XpIcon } from '@/shared/images';

interface FullPageSliderProps {}

const FullPageSlider: FC<FullPageSliderProps> = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [updateCount, setUpdateCount] = useState(0);
	let sliderRef = useRef<Slider | null>(null);

	const settings: Settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 140,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: () => setUpdateCount(updateCount + 1),
		beforeChange: (current, next) => setSlideIndex(next),
		fade: true,
	};

	const sliderNext = () => sliderRef.current && sliderRef.current.slickNext();
	const sliderPrev = () => sliderRef.current && sliderRef.current.slickPrev();
	const sliderGoTo = (index: number) => sliderRef.current && sliderRef.current.slickGoTo(index);

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
							onClick={sliderPrev}
							className='bg-tone/200 min-w-0 rounded-xl !p-[10px] max-md:hidden '
						>
							<ArrowIcon />
						</Button>
						<Button
							buttonStyle='gray'
							onClick={sliderNext}
							className='bg-tone/200 min-w-0 rounded-xl !p-[10px] ml-1 max-md:hidden'
						>
							<ArrowIcon className='rotate-180' />
						</Button>

						<div className='ml-2 bg-tone/200 py-4 px-6 rounded-[50px] flex gap-2'>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[0.65] ${
									slideIndex === 0 ? '!opacity-100 scale-[1.1]' : ''
								}`}
								onClick={() => sliderGoTo(0)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.65] ${
									slideIndex === 1 ? '!opacity-100 scale-[1.1]' : ''
								}`}
								onClick={() => sliderGoTo(1)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.65] ${
									slideIndex === 2 ? '!opacity-100 scale-[1.1]' : ''
								}`}
								onClick={() => sliderGoTo(2)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.65] ${
									slideIndex === 3 ? '!opacity-100 scale-[1.1]' : ''
								}`}
								onClick={() => sliderGoTo(3)}
							/>
						</div>
					</div>
				</div>
				<Slider
					className='mt-8 rounded-3xl overflow-hidden max-md:mt-6 cursor-pointer'
					{...settings}
					ref={sliderRef}
				>
					{Array.from(Array(4).keys()).map(index => {
						return (
							<div
								key={index}
								className='h-[482px] bg-absolute/800 max-md:h-[553px]'
							>
								<div className='flex h-full max-md:flex-col-reverse'>
									<div className='max-pc:px-[32px] w-1/2 px-[62px] pt-[106px] max-lg:py-20 max-lg:px-6 max-md:p-4 max-md:w-full'>
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

										<div className='mt-3'>
											<h2 className='text-5xl leading-[60px] font-bold max-lg:text-4xl'>
												Bridge to Taiko
											</h2>
											<p className='opacity-50 mt-4 text-base'>
												Start your Taiko journey by bridging ETH to its permissionless,
												Ethereum-based rollup.
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
									<div className='w-1/2 relative max-md:w-full max-md:h-full'>
										<Image
											src={'/images/Banner.jpg'}
											alt='banner'
											fill
											className='object-cover'
											quality={100}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default FullPageSlider;
