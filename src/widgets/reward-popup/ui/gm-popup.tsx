'use client';
import {FireAnimateIcon, HandAnimateIcon} from '@/shared/images';
import {Button, P} from '@/shared/ui-kit';
import Popup from '@/shared/ui-kit/popup/ui/popup';
import {FC, useEffect, useState} from 'react';
import {useRewardPopupStore} from '../state/state';
import moment from 'moment';

interface IGmPopupProps {
}

const GmPopup: FC<IGmPopupProps> = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {setOpen: setOpenRewardPopup} = useRewardPopupStore(state => state);

    useEffect(() => {
        if (!window) return;
        const modalDate = window.localStorage.getItem('lastModalDate');

        if (!modalDate) {
            handleOpen();
            window.localStorage.setItem('lastModalDate', JSON.stringify(new Date()));
            return;
        }

        const lastModalOpenDate = new Date(JSON.parse(modalDate));
        const todayDate = new Date();

        const diffHours = moment(lastModalOpenDate).diff(moment(todayDate), 'hours');

        if (diffHours >= 24) {
            handleOpen();
            window.localStorage.setItem('lastModalDate', JSON.stringify(new Date()));
        }
    }, []);

    return (
        <Popup
            handleClose={handleClose}
            open={open}
        >
            <div
                className='max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-md:text-center h-full'>
                <div className='container !px-0'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <FireAnimateIcon className='w-[40px] h-[40px]'/>
                            <span className='!font-bold text-4xl'>
                                6 <span className='opacity-50'>d</span>
                            </span>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <span className='!font-bold text-4xl'>GM Streak</span>
                        <P className='mt-1'>Activate GM today to earn rewards from the referrals.</P>
                    </div>

                    <Button
                        color='green'
                        className='flex items-center !w-full mt-6 !py-[14px]'
                        onClick={() => {
                            handleClose();
                            setOpenRewardPopup(true);
                        }}
                    >
                        <span className='mr-2 !font-semibold text-base'>GM</span>
                        <HandAnimateIcon/>
                    </Button>
                </div>
            </div>
        </Popup>
    );
}

export default GmPopup;
