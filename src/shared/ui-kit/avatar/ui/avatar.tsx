'use client';
import { useWindowSize } from '@/shared/hooks';
import { Avatar as MuiAvatar } from '@mui/material';
import { FC } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

interface AvatarProps {
	className?: string;
	contentClassName?: string;
	hideLevelLine?: boolean;
	levelClassName?: string;
}

export const Avatar: FC<AvatarProps & AvatarProps> = props => {
	const percentage = 50;
	const { className, hideLevelLine, levelClassName, contentClassName, ...muiProps } = props;

	const size = useWindowSize();

	return (
		<div
			className={`relative ${contentClassName} flex w-[52px] h-[52px] max-md:w-[40px] max-md:h-[40px] justify-center items-center`}
		>
			<MuiAvatar
				{...muiProps}
				className={`${className} w-[40px] h-[40px] max-md:w-[32px] max-md:h-[32px]`}
			/>
			{!hideLevelLine && (
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
			)}

			<div
				className={`absolute 
					-right-[2px] -bottom-[2px]
					border-[3px] w-[28px] h-[28px] flex justify-center
					items-center border-absolute/800
				 bg-blue/400 radius rounded-[50%] max-md:w-4 max-md:h-4 max-md:font-bold-4
				 	max-md:text-[8px] max-md:leading-[11px] max-md:bottom-[-2px] max-md:right-[-2px] 
					max-md:border-[2px] ${levelClassName}
				`}
			>
				<span className='text-xs'>6</span>
			</div>
		</div>
	);
};
