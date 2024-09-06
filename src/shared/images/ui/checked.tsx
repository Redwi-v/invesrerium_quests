import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const CheckedIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cssIf(className)}
			width='16'
			height='12'
			viewBox='0 0 16 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M1.8125 6.125L5.75 10.0625L14.75 1.0625'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
