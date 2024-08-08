import { FC } from 'react';

export const PolygonImage: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			width='174'
			height='192'
			viewBox='0 0 174 192'
			fill='none'
		>
			<path
				d='M73.5 9.56773C81.8538 4.74464 92.1462 4.74465 100.5 9.56773L155.103 41.0925C163.456 45.9156 168.603 54.829 168.603 64.4752V127.525C168.603 137.171 163.456 146.084 155.103 150.907L100.5 182.432C92.1462 187.255 81.8538 187.255 73.5 182.432L18.8975 150.907C10.5436 146.084 5.39746 137.171 5.39746 127.525V64.4752C5.39746 54.829 10.5436 45.9156 18.8975 41.0925L73.5 9.56773Z'
				fill='url(#paint0_linear_2015_9292)'
				stroke='url(#paint1_linear_2015_9292)'
				stroke-width='10'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_2015_9292'
					x1='87'
					y1='-4'
					x2='87'
					y2='196'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#8B43FF' />
					<stop
						offset='1'
						stop-color='#532899'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_2015_9292'
					x1='87'
					y1='-4'
					x2='87'
					y2='196'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#AD7BFF' />
					<stop
						offset='1'
						stop-color='#6C11FF'
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};
