'use client';
import { FC } from 'react';
import { Store } from 'react-notifications-component';
import { CrossIcon } from '../../../images/ui/cross';
import { CheckedIcon } from '@/shared/images';
interface ISuccessNotificationProps {
	id: string;
	notificationConfig: {
		title: string;
	};
}

export const SuccessNotification: FC<ISuccessNotificationProps> = props => {
	const {} = props;
	console.log(props);

	return (
		<div className='flex items-center p-4 rounded-3xl bg-green/600'>
			<div className='bg-green/400 w-[26px] h-[26px] rounded-full flex justify-center items-center mr-[15px]'>
				<CheckedIcon />
			</div>
			<span className='text-base !font-semibold'>{props.notificationConfig.title}</span>
			<button
				className='bg-absolute/100 bg-opacity-[0.07] hover:bg-opacity-15 duration-500 w-[40px] h-[40px] flex justify-center items-center ml-11 rounded-xl'
				onClick={() => Store.removeNotification(props.id)}
			>
				<CrossIcon />
			</button>
		</div>
	);
};
