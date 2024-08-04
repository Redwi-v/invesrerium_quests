'use client';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowIcon } from '../../../shared/images/ui/arrow';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { Button } from '@/shared/ui-kit';
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
		speed: 500,
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
			<Spiral
				className='absolute -rotate-90 -right-[213px] top-[12px]
}'
			/>
			<div className='custom-container mt-[42px] pb-[62px] relative'>
				<Spiral className='absolute rotate-90 -left-[359px] -top-[44px]' />

				<div className='flex justify-between'>
					<h2 className='font-bold text-3xl'>Featured</h2>
					<div className='flex'>
						<button
							onClick={sliderPrev}
							className='bg-tone/200 rounded-xl p-[10px]'
						>
							<ArrowIcon />
						</button>
						<button
							onClick={sliderNext}
							className='bg-tone/200 rounded-xl p-[10px] ml-1'
						>
							<ArrowIcon className='rotate-180' />
						</button>

						<div className='ml-2 bg-tone/200 py-4 px-6 rounded-[50px] flex gap-2'>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.72] ${
									slideIndex === 0 ? 'opacity-100' : ''
								}`}
								onClick={() => sliderGoTo(0)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.72] ${
									slideIndex === 1 ? 'opacity-100' : ''
								}`}
								onClick={() => sliderGoTo(1)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.72] ${
									slideIndex === 2 ? 'opacity-100' : ''
								}`}
								onClick={() => sliderGoTo(2)}
							/>
							<button
								className={`w-2 h-2 bg-absolute/100 rounded-full opacity-[.72] ${
									slideIndex === 3 ? 'opacity-100' : ''
								}`}
								onClick={() => sliderGoTo(3)}
							/>
						</div>
					</div>
				</div>
				<Slider
					className='mt-8 rounded-3xl overflow-hidden'
					{...settings}
					ref={sliderRef}
				>
					{Array.from(Array(10).keys()).map(index => {
						return (
							<div
								key={index}
								className='h-[482px] bg-tone/200'
							>
								<div className='flex h-full'>
									<div className='w-1/2 px-[62px] pt-[106px]'>
										<div className='flex justify-between border-b border-border pb-3  items-center'>
											<div className='p-[6px] pr-[16px] bg-absolute/100 bg-opacity-[.07] flex items-center rounded-[100px]'>
												<CoinIcon />
												<span className='ml-2'>Blockchain</span>
											</div>

											<div className='flex items-center gap-2 font-medium text-sm text-blue/400'>
												<Avatar className='w-6 h-6' />
												<span>Сompany name{index}</span>
											</div>
										</div>

										<div className='mt-3'>
											<h1 className='text-5xl font-bold'>Bridge to Taiko</h1>
											<p className='opacity-50 mt-4 text-base'>
												Start your Taiko journey by bridging ETH to its permissionless,
												Ethereum-based rollup.
											</p>
										</div>

										<div className='mt-[42px] flex items-center justify-between'>
											<Button className='flex gap-2 items-center'>
												<span>Begin</span>
												<ArrowIcon className='rotate-180' />
											</Button>
											<div className='flex gap-1'>
												<div className='p-3 bg-blue/400 rounded-2xl'>
													<CupIcon />
												</div>
												<div className='py-3 px-4 rounded-2xl bg-absolute/100 bg-opacity-[0.07] flex items-center gap-3'>
													<Image
														src={'/icons/nft1.png'}
														alt='nft'
														width={24}
														height={24}
													/>
													<Image
														src={'/icons/nft2.png'}
														alt='nft'
														width={24}
														height={24}
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
									<div className='w-1/2 relative'>
										<Image
											src={'/images/Banner.jpg'}
											alt='banner'
											fill
											className='object-cover'
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
