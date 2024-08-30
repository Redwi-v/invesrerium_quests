'use client';
import { CrossIcon, FireAnimateIcon, HandAnimateIcon } from '@/shared/images';
import { Button, P } from '@/shared/ui-kit';
import FullPageSlider from '@/widgets/full-page-slider/ui/full-page-slider';
import { ListSlider } from '@/widgets/list-slider';
import UserStats from '@/widgets/user-stats/ui/user-stats';
import { Box, Modal } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import moment from 'moment';
import Popup from '@/shared/ui-kit/popup/ui/popup';
import { useRewardPopupStore } from '@/widgets/reward-popup';

interface MainPageViewProps {}

export const MainPageView: FC<MainPageViewProps> = () => {
	return (
		<>
			<BasicModal />
			<div className='max-md:hidden'>
				<UserStats />
			</div>
			<FullPageSlider />
			<ListSlider
				mainTitle='In progress'
				className=''
			/>
			<div className='container max-md:w-auto max-md:px-3'>
				<span className='mb-[62px] border-b border-absolute/100 border-opacity-15 block max-md:mb-8'></span>
			</div>
			<ListSlider mainTitle='New Quests' />
		</>
	);
};

export default function BasicModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { setOpen: setOpenRewardPopup } = useRewardPopupStore(state => state);

	const [needOpen, setNeedOpen] = useState(false);

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
			<div className='max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-md:text-center h-full'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<FireAnimateIcon className='w-[40px] h-[40px]' />
						<span className='font-bold text-4xl'>
							6 <span className='opacity-50'>d</span>
						</span>
					</div>
				</div>
				<div className='mt-6'>
					<span className='font-bold text-4xl'>GM Streak</span>
					<P className='mt-1'>Activate GM today to earn rewards from the referrals.</P>
				</div>

				<Button
					buttonStyle='green'
					className='flex items-center !w-full mt-6 !py-[14px]'
					onClick={() => {
						handleClose();
						setOpenRewardPopup(true);
					}}
				>
					<span className='mr-2 font-semibold text-base'>GM</span>
					<HandAnimateIcon />
				</Button>
			</div>
		</Popup>
	);
}
