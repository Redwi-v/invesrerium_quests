import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const CopyIcon: FC<{ className?: string }> = ({ className }) => {
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
				d='M7.5 7.5625H7.5625V7.5V3.75C7.5625 3.56766 7.63493 3.3928 7.76386 3.26386C7.8928 3.13493 8.06766 3.0625 8.25 3.0625H20.25C20.4323 3.0625 20.6072 3.13493 20.7361 3.26386C20.8651 3.3928 20.9375 3.56766 20.9375 3.75V15.75C20.9375 15.9323 20.8651 16.1072 20.7361 16.2361C20.6072 16.3651 20.4323 16.4375 20.25 16.4375H16.5H16.4375V16.5V20.25C16.4375 20.4323 16.3651 20.6072 16.2361 20.7361C16.1072 20.8651 15.9323 20.9375 15.75 20.9375H3.75C3.56766 20.9375 3.3928 20.8651 3.26386 20.7361C3.13493 20.6072 3.0625 20.4323 3.0625 20.25V8.25C3.0625 8.06766 3.13493 7.8928 3.26386 7.76386C3.3928 7.63493 3.56766 7.5625 3.75 7.5625H7.5ZM19.5 15.0625H19.5625V15V4.5V4.4375H19.5H9H8.9375V4.5V7.5V7.5625H9H15.75C15.9323 7.5625 16.1072 7.63493 16.2361 7.76386C16.3651 7.8928 16.4375 8.06766 16.4375 8.25V15V15.0625H16.5H19.5Z'
				fill='white'
				stroke='white'
				stroke-width='0.125'
			/>
		</svg>
	);
};
