import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const DisconnectIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cssIf(className)}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10.5 3.75H4.5V20.25H10.5'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.5 12H21'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M17.25 8.25L21 12L17.25 15.75'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
