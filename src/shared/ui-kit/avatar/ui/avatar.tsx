'use client';
import { useWindowSize } from '@/shared/hooks';
import { Avatar as MuiAvatar } from '@mui/material';
import { FC } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

interface AvatarProps {
	className?: string;
	contentClassName?: string;
}

export const Avatar: FC<AvatarProps & AvatarProps> = props => {
	const percentage = 50;
	const { className, contentClassName, ...muiProps } = props;

	const size = useWindowSize();

	return (
		<div
			className={`relative ${contentClassName} flex w-[56px] h-[56px] max-sm:w-[40px] max-sm:h-[40px] justify-center items-center`}
		>
			<MuiAvatar
				{...muiProps}
				className={`${className} w-[40px] h-[40px] max-sm:w-[32px] max-sm:h-[32px]`}
			/>
			<div>
				<CircularProgressbar
					className='absolute top-0 left-0 !w-[100%] !h-[100%] rotate-[140deg]'
					strokeWidth={size.width >= 640 ? 7 : 5}
					value={percentage}
					styles={buildStyles({
						pathColor: '#924FFF',
						trailColor: 'none',
						strokeLinecap: 'butt',
					})}
				/>
			</div>

			<div
				className='absolute 
					right-[-7px] bottom-[-4px]
					border-[3px] w-8 h-8 flex justify-center
					items-center border-absolute/800
				 bg-blue/400 radius rounded-[50%] max-sm:w-5 max-sm:h-5 max-sm:font-bold-4
				 	max-sm:text-[8px] max-sm:leading-[11px] max-sm:bottom-[-2px] max-sm:right-[-2px] max-sm:border-[2px]
				'
			>
				<span>6</span>
			</div>
		</div>
	);
};
