import { FC } from 'react';

export const SwitchIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M15.75 9H20.25V4.5'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M20.25 8.99988L17.5988 6.34863C16.0633 4.81329 13.9846 3.94515 11.8132 3.93251C9.64193 3.91988 7.55317 4.76376 6 6.28113'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M8.25 15H3.75V19.5'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M3.75 15L6.40125 17.6512C7.93666 19.1866 10.0154 20.0547 12.1868 20.0674C14.3581 20.08 16.4468 19.2361 18 17.7188'
				stroke='#717171'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
