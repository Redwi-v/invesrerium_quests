import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const SpinnerIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cssIf(className)}
			width='42'
			height='42'
			viewBox='0 0 42 42'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clip-path='url(#clip0_1_4302)'>
				<path
					d='M21 5.25V10.5'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M36.75 21H31.5'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M32.1366 32.1366L28.4238 28.4238'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M21 36.75V31.5'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9.86328 32.1366L13.576 28.4238'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M5.25 21H10.5'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9.86328 9.8634L13.576 13.5761'
					stroke='white'
					stroke-opacity='0.49'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_4302'>
					<rect
						width='42'
						height='42'
						fill='white'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
