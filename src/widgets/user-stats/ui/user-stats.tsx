'use client';
import {CupIcon, FireIcon, HandAnimateIcon, StarIcon} from '@/shared/images';
import {Avatar, Button, IconBox} from '@/shared/ui-kit';
import {useRewardPopupStore} from '@/widgets/reward-popup';
import {FC} from 'react';
import {Separator} from "@/shared/ui-kit/separator/ui/separator";

interface IUserStatsProps {}

const UserStats: FC<IUserStatsProps> = props => {
    const {} = props;
    const {setOpen} = useRewardPopupStore(state => state);

    return (
        <div className='container max-md:hidden mt-10'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <Avatar
                        className='w-[86px] h-[86px]'
                        contentClassName='w-[86px] h-[86px]'
                        hideLevelLine
                        levelClassName='!w-[40px] !h-[40px] !-right-[6px] !-bottom-[6px] !border-4 border-bg [&>span]:text-base'
                    />

                    <div className='w-[196px]'>
						<span className='block !font-semibold text-lg'>
							0x68ae...eB2E
						</span>
                        <Separator className='my-1'/>
                        <div className='flex justify-between opacity-50 text-sm'>
                            <span>0 xp</span> <span>100xp</span>
                        </div>
                        <div className='bg-absolute/700 h-2 rounded-[100px] mt-1 overflow-hidden'>
                            <span className='block w-[40%] h-full bg-blue/400'></span>
                        </div>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div className='bg-absolute/800 p-4 rounded-[18px] flex'>
                        <div className='flex  items-end flex-col gap-[2px]'>
                            <span className='!font-semibold text-sm opacity-50'>GM Streak</span>
                            <span className='!font-bold text-lg '>
								6<span className='pl-1 opacity-50 font-medium text-lg'>d</span>
							</span>
                        </div>
                        <div className='ml-4 flex gap-2'>
                            <IconBox
                                type='xl'
                                color='purple'
                                className='max-lg:hidden'
                            >
                                <FireIcon/>
                            </IconBox>
                            <Button
                                type='xl'
                                color='green'
                                onClick={() => setOpen(true)}
                            >
                                <span className='mr-2'>GM</span>
                                <HandAnimateIcon/>
                            </Button>
                        </div>
                    </div>
                    <div className='bg-absolute/800 p-4 rounded-[18px] flex'>
                        <div className='flex items-end flex-col gap-[2px]'>
                            <span className='font-semibold text-sm opacity-50'>Quests</span>
                            <span className='font-bold text-lg'>12</span>
                        </div>
                        <div className='ml-4 flex gap-2 max-lg:hidden'>
                            <IconBox
                                type='xl'
                                color='purple'
                            >
                                <StarIcon/>
                            </IconBox>
                        </div>
                    </div>
                    <div className='bg-absolute/800 p-4 rounded-[18px] flex max-xl:hidden'>
                        <div className='flex  items-end flex-col gap-[2px]'>
                            <span className='font-semibold text-sm opacity-50'>Rewards</span>
                            <span className='font-bold text-lg'>$ 125.09</span>
                        </div>
                        <div className='ml-4 flex gap-2'>
                            <IconBox
                                type='xl'
                                color='purple'
                            >
                                <CupIcon/>
                            </IconBox>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className='mt-10'/>
        </div>
    );
};

export default UserStats;
