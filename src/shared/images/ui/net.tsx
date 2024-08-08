import { FC } from 'react';

export const NetIcon: FC<{ className?: string; signal: 0 | 1 | 2 | 3 }> = ({
	className,
	signal,
}) => {
	return (
		<svg
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='4'
				y='14'
				width='4'
				height='6'
				rx='2'
				fill={signal > 0 ? '#924FFF' : '#717171'}
			/>
			<rect
				x='10'
				y='9'
				width='4'
				height='11'
				rx='2'
				fill={signal > 1 ? '#924FFF' : '#717171'}
			/>
			<rect
				x='16'
				y='4'
				width='4'
				height='16'
				rx='2'
				fill={signal > 2 ? '#924FFF' : '#717171'}
			/>
		</svg>
	);
};
