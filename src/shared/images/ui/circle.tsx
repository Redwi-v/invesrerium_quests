import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const CircleIcon: FC<{ className?: string }> = ({ className }) => {
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
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z'
				fill='url(#paint0_linear_2003_22568)'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z'
				fill='#924FFF'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_2003_22568'
					x1='22'
					y1='20'
					x2='3.5'
					y2='2.5'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#9D60FF' />
					<stop
						offset='1'
						stop-color='#FFD747'
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};
