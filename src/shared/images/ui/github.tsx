import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const GitHubIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			width='23'
			height='22'
			viewBox='0 0 23 22'
			fill='none'
			className={cssIf(className)}
		>
			<g clip-path='url(#clip0_1_5616)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M11.7172 0C5.65263 0 0.75 5.04167 0.75 11.2789C0.75 16.2646 3.89129 20.485 8.24908 21.9787C8.79392 22.091 8.99349 21.736 8.99349 21.4374C8.99349 21.1759 8.97553 20.2796 8.97553 19.3458C5.92471 20.0182 5.28941 18.0013 5.28941 18.0013C4.79912 16.6941 4.07267 16.3581 4.07267 16.3581C3.07414 15.6672 4.14541 15.6672 4.14541 15.6672C5.25304 15.7419 5.83425 16.825 5.83425 16.825C6.81459 18.5428 8.39433 18.0574 9.02986 17.7586C9.12055 17.0303 9.41127 16.5261 9.71994 16.2461C7.28669 15.9846 4.72661 15.0136 4.72661 10.6812C4.72661 9.44877 5.16212 8.44044 5.8522 7.65623C5.74333 7.37619 5.36192 6.21821 5.96131 4.66835C5.96131 4.66835 6.88733 4.36952 8.97531 5.8261C9.86924 5.57921 10.7911 5.45362 11.7172 5.45256C12.6432 5.45256 13.5872 5.58342 14.4589 5.8261C16.5471 4.36952 17.4731 4.66835 17.4731 4.66835C18.0725 6.21821 17.6909 7.37619 17.582 7.65623C18.2903 8.44044 18.7078 9.44877 18.7078 10.6812C18.7078 15.0136 16.1478 15.9658 13.6963 16.2461C14.0959 16.6008 14.4407 17.273 14.4407 18.3375C14.4407 19.85 14.4228 21.0639 14.4228 21.4372C14.4228 21.736 14.6226 22.091 15.1672 21.9789C19.525 20.4847 22.6663 16.2646 22.6663 11.2789C22.6842 5.04167 17.7636 0 11.7172 0Z'
					fill='#717171'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_5616'>
					<rect
						width='22'
						height='22'
						fill='white'
						transform='translate(0.75)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
