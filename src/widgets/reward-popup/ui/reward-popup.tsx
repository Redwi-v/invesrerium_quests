'use client';
import { CircleIcon, CupIcon, XpIcon } from '@/shared/images';
import { P } from '@/shared/ui-kit';
import Popup from '@/shared/ui-kit/popup/ui/popup';
import { FC } from 'react';
import { useRewardPopupStore } from '../state/state';
interface IRewardPopupProps {}

const RewardPopup: FC<IRewardPopupProps> = props => {
	const {} = props;
	const { isOpen, setOpen } = useRewardPopupStore(state => state);

	return (
		<Popup
			handleClose={() => setOpen(false)}
			open={isOpen}
		>
			<div className='max-md:h-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:w-full'>
				<CupIcon className='w-10 h-10 [&>path]:fill-blue/400 [&>path]:stroke-blue/400' />
				<p className='font-bold text-4xl leading-[45px] mt-6'>Reward</p>
				<P className='mt-1'>
					Your reward today for keeping up the GM <br className='hidden max-md:block' /> streak
				</P>

				<div className='flex gap-2 mt-6 w-full'>
					<div className='bg-black bg-opacity-20 rounded-2xl py-[14px] px-3 flex w-full justify-between items-center'>
						<span className='font-semibold text-base'>AP</span>
						<span className='flex items-center gap-[6px]'>
							<span className='text-sm font-semibold'>110</span>
							<CircleIcon />
						</span>
					</div>
					<div className='bg-black bg-opacity-20 rounded-2xl py-[14px] px-3 flex w-full justify-between items-center'>
						<span className='font-semibold text-base'>XP</span>
						<span className='flex items-center gap-[6px]'>
							<span className='text-sm font-semibold'>180</span>
							<XpIcon />
						</span>
					</div>
				</div>
			</div>
		</Popup>
	);
};

export default RewardPopup;
