import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const SettingsIcon: FC<{ className?: string }> = ({ className }) => {
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
				d='M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z'
				stroke='#717171'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.1906 19.3228C12.0649 19.3228 11.9384 19.3228 11.8156 19.3228L8.81088 21C7.64118 20.6065 6.55626 19.9959 5.61306 19.2L5.60181 15.825C5.53525 15.72 5.47244 15.6141 5.41431 15.5053L2.4265 13.8038C2.19117 12.6134 2.19117 11.3885 2.4265 10.1981L5.4115 8.50125C5.47244 8.39344 5.53525 8.28656 5.599 8.18156L5.614 4.80656C6.55634 4.00842 7.64099 3.39548 8.81088 3L11.8109 4.67719C11.9365 4.67719 12.0631 4.67719 12.1859 4.67719L15.1859 3C16.3556 3.39346 17.4405 4.00414 18.3837 4.8L18.3949 8.175C18.4615 8.28 18.5243 8.38594 18.5824 8.49469L21.5684 10.1953C21.8037 11.3857 21.8037 12.6106 21.5684 13.8009L18.5834 15.4978C18.5224 15.6056 18.4596 15.7125 18.3959 15.8175L18.3809 19.1925C17.4392 19.9908 16.3552 20.604 15.1859 21L12.1906 19.3228Z'
				stroke='#717171'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
