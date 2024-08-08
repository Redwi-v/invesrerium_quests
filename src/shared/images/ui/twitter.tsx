import { FC } from 'react';

export const TwitterIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			width='25'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
		>
			<path
				d='M19.1315 2H22.5037L15.0996 10.4871L23.75 22H16.9616L11.6467 15.0037L5.56206 22H2.18985L10.0339 12.9225L1.75 2H8.70701L13.5087 8.39114L19.1315 2ZM17.9513 20.0074H19.8206L7.72467 3.91882H5.71601L17.9513 20.0074Z'
				fill='#959595'
			/>
		</svg>
	);
};
