import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const SmallArrow: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cssIf(className)}
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M13 11L18 16L13 21'
				stroke='white'
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
