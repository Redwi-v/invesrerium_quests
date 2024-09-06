'use client';
import {FC, useCallback, useEffect, useRef, useState} from 'react';
import Slider, {Settings} from 'react-slick';
import {ArrowIcon} from '../../../shared/images/ui/arrow';
import Image from 'next/image';
import {Avatar} from '@mui/material';
import {Button, H1, IconBox} from '@/shared/ui-kit';
import {CoinIcon, CupIcon, Spiral, XpIcon} from '@/shared/images';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import {RewardBox} from "@/shared/ui-kit/reward-box/ui/rewards-box";

interface FullPageSliderProps {
}

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
            <Spiral className='absolute -rotate-90 -right-[213px] top-[12px] max-xl:hidden'/>

            <div className='container relative mt-10 max-md:mt-6 mb-16 max-lg:mb-10'>
                <Spiral className='absolute rotate-90 -left-[359px] -top-[44px] max-xl:hidden'/>

                <div className='flex justify-between'>
                    <H1>Featured</H1>
                    <div className='flex max-md:hidden'>
                        <Button
                            type='sm'
                            color='gray'
                            arrow='left'
                            onClick={handlePrev}
                            className='!px-2.5'
                        />
                        <Button
                            type='sm'
                            color='gray'
                            arrow='right'
                            onClick={handleNext}
                            className='!px-2.5 ml-1'
                        />

                        <div className='flex gap-2 bg-tone/200 rounded-full ml-2 px-6 py-4'>
                            <button
                                className={`w-2 h-2 bg-tone/500 rounded-full transition-all opacity-30 hover:!opacity-100 ${activeIndex === 0 && '!bg-absolute/100 !opacity-100'}`}
                                onClick={() => handleGoTo(0)}
                            />
                            <button
                                className={`w-2 h-2 bg-tone/500 rounded-full transition-all opacity-30 hover:!opacity-100 ${activeIndex === 1 && '!bg-absolute/100 !opacity-100'}`}
                                onClick={() => handleGoTo(1)}
                            />
                            <button
                                className={`w-2 h-2 bg-tone/500 rounded-full transition-all opacity-30 hover:!opacity-100 ${activeIndex === 2 && '!bg-absolute/100 !opacity-100'}`}
                                onClick={() => handleGoTo(2)}
                            />
                            <button
                                className={`w-2 h-2 bg-tone/500 rounded-full transition-all opacity-30 hover:!opacity-100 ${activeIndex === 3 && '!bg-absolute/100 !opacity-100'}`}
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
                        pauseOnMouseEnter: true,
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
                                        className='max-xl:px-[32px] w-1/2 px-[62px]
										pb-[106px] pt-[106px] max-lg:py-20 flex
										max-lg:px-6 max-md:p-4 max-md:w-full flex-col max-md:h-[100%]'
                                    >
                                        <div className='flex justify-between border-b border-border pb-3 items-center'>
                                            <div
                                                className='p-[6px] pr-[16px] bg-absolute/100 bg-opacity-[.07] flex items-center rounded-[100px]'>
                                                <CoinIcon/>
                                                <span className='ml-2 text-sm !font-medium'>Blockchain</span>
                                            </div>

                                            <div
                                                className='flex max-w-[54.5%] max-lg:max-w-[45%] truncate items-center gap-2 text-sm text-blue/400'>
                                                <Avatar className='w-6 h-6'/>
                                                <span className='truncate'>
													Company name {index !== 0 ? index : 'name Company name'}
												</span>
                                            </div>
                                        </div>

                                        <div className='mt-3 mb-auto'>
                                            <h2 className='text-5xl leading-[60px] max-lg:leading-[45px] !font-bold max-lg:text-4xl'>
                                                Bridge to Taiko
                                            </h2>
                                            <p className='opacity-50 mt-4 text-base'>
                                                Start your Taiko journey by bridging ETH to its permissionless,
                                                Ethereum-based rollup.{' '}
                                                {index === 0 &&
                                                    'dfkdjfldk jfdlkf jdlkfj dlkfjd lkfj dklfj dklfj dlfkjd lkfjd lkfjdlf kjdfkld jfl'}
                                            </p>
                                        </div>

                                        <div
                                            className='flex items-center justify-between max-lg:flex-col-reverse gap-3 lg:gap-5 mt-10 max-lg:mt-6'>
                                            <Button
                                                color='purple'
                                                arrow='right'
                                                className='max-lg:w-full'
                                            >
                                                <span>Begin</span>
                                            </Button>

                                            <div className='flex gap-1 grow max-lg:w-full 2xl:max-w-[54.5%]'>
                                                <IconBox color='purple'>
                                                    <CupIcon/>
                                                </IconBox>
                                                <RewardBox
                                                    color='gray'
                                                    className='!w-full'
                                                    xp='180'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2 relative max-md:w-full  max-md:!min-h-[200px]'>
                                        <Image
                                            src={'/images/Banner.jpg'}
                                            alt='banner'
                                            fill
                                            sizes='100% auto'
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
