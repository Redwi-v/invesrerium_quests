import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const BurgerMenu: FC<{ className?: string }> = ({ className }) => {
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
				d='M3.75 12H20.25'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.75 6H20.25'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.75 18H20.25'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
