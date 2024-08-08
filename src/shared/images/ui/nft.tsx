import { FC } from 'react';

export const NftIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clip-path='url(#clip0_2015_9323)'>
				<path
					d='M10 1.1547C11.2376 0.440169 12.7624 0.440169 14 1.1547L20.3923 4.8453C21.6299 5.55983 22.3923 6.88034 22.3923 8.3094V15.6906C22.3923 17.1197 21.6299 18.4402 20.3923 19.1547L14 22.8453C12.7624 23.5598 11.2376 23.5598 10 22.8453L3.6077 19.1547C2.37009 18.4402 1.6077 17.1197 1.6077 15.6906V8.3094C1.6077 6.88034 2.37009 5.55983 3.6077 4.8453L10 1.1547Z'
					fill='white'
					fill-opacity='0.49'
				/>
				<mask
					id='mask0_2015_9323'
					maskUnits='userSpaceOnUse'
					x='1'
					y='0'
					width='22'
					height='24'
				>
					<path
						d='M10 1.1547C11.2376 0.440169 12.7624 0.440169 14 1.1547L20.3923 4.8453C21.6299 5.55983 22.3923 6.88034 22.3923 8.3094V15.6906C22.3923 17.1197 21.6299 18.4402 20.3923 19.1547L14 22.8453C12.7624 23.5598 11.2376 23.5598 10 22.8453L3.6077 19.1547C2.37009 18.4402 1.6077 17.1197 1.6077 15.6906V8.3094C1.6077 6.88034 2.37009 5.55983 3.6077 4.8453L10 1.1547Z'
						fill='white'
						fill-opacity='0.49'
					/>
				</mask>
				<g mask='url(#mask0_2015_9323)'>
					<path
						d='M22.3923 6L12 0V24L22.3923 18V6Z'
						fill='white'
						fill-opacity='0.49'
					/>
				</g>
			</g>
			<defs>
				<clipPath id='clip0_2015_9323'>
					<rect
						width='24'
						height='24'
						fill='white'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
