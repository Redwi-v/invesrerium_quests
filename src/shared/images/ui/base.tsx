import { FC } from 'react';

export const BaseIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<mask
				id='mask0_2015_9439'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='20'
				height='20'
			>
				<path
					d='M20 0H0V20H20V0Z'
					fill='white'
				/>
				<path
					d='M0.5 0.5H19.5V19.5H0.5V0.5Z'
					stroke='white'
				/>
			</mask>
			<g mask='url(#mask0_2015_9439)'>
				<path
					d='M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z'
					fill='#2050F5'
				/>
				<path
					d='M9.95727 16.9642C13.8596 16.9642 17.0232 13.8063 17.0232 9.91073C17.0232 6.01512 13.8596 2.85712 9.95727 2.85712C6.25493 2.85712 3.21767 5.69967 2.91602 9.31781H12.2555V10.5036H2.91602C3.21767 14.1217 6.25493 16.9642 9.95727 16.9642Z'
					fill='white'
				/>
			</g>
		</svg>
	);
};
