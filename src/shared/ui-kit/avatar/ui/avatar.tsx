'use client';
import {useWindowSize} from '@/shared/hooks';
import {cssIf} from '@/shared/utils';
import {Avatar as MuiAvatar} from '@mui/material';
import {FC} from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';

interface AvatarProps {
    className?: string;
    contentClassName?: string;
    hideLevelLine?: boolean;
    levelClassName?: string;
}

export const Avatar: FC<AvatarProps> = props => {
    const percentage = 50;
    const {className, hideLevelLine, levelClassName, contentClassName, ...muiProps} = props;

    const size = useWindowSize();

    return (
        <div
            className={`
				relative flex justify-center items-center
				${contentClassName ? cssIf(contentClassName) : 'w-12 h-12 max-md:w-10 max-md:h-10'}
			`}
        >
            <MuiAvatar
                {...muiProps}
                className={`${cssIf(className)} w-9 h-9 max-md:w-[30px] max-md:h-[30px]`}
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
				 bg-blue/400 radius rounded-[50%] max-md:w-5 max-md:h-5
				 	  max-md:bottom-[-2px] max-md:right-[-2px] 
					max-md:border-[2px] ${cssIf(levelClassName)}
				`}
            >
                <span className='!font-semibold text-xs max-md:text-[8px] max-md:-mr-[1px]'>6</span>
            </div>
        </div>
    );
};
