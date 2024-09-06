import {cssIf} from '@/shared/utils';
import {Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {ArrowIcon, CoinIcon, PolygonImage, PolygonImage2, XpIcon} from "@/shared/images";
import {ApIcon} from "@/shared/images/ui/ap";
import {NftIcon} from "@/shared/images/ui/nft";

interface IRewardBoxProps {
    className?: string;
    type?: 'sm' | 'base' | 'xl';
    color: 'green' | 'green/200' | 'purple' | 'gray' | 'red';
    adaptive?: boolean;
    xp?: string;
}

const colors: { [key: string]: string } = {
    green: 'bg-green/400',
    'green/200': 'bg-green/200',
    purple: 'bg-blue/400',
    gray: 'bg-tone/200',
    red: 'bg-red/400',
};

export const RewardBox: FC<IRewardBoxProps> = ({className, type = 'base', color, adaptive = false, xp}) => {
    const types: { [key: string]: string } = {
        sm: 'gap-2 min-w-10 min-h-10 p-2.5',
        base: adaptive ? 'gap-2 md:gap-3 min-w-10 min-h-10 p-2.5 md:min-w-12 md:min-h-12 md:p-3'
            : 'gap-3 min-w-12 min-h-12 p-3 ',
        xl: 'gap-3 min-w-13 min-h-13 p-3.5',
    };

    const currentSize = types[type];
    const currentColor = colors[color];

    return (
        <div className={`
            flex justify-center rounded-xl
            ${currentSize}
            ${currentColor}
            ${cssIf(className)}
        `}>
            <NftIcon className={adaptive ? 'w-5 h-5 md:w-6 md:h-6' : 'w-6 h-6'}/>
            <CoinIcon className={adaptive ? 'w-5 h-5 md:w-6 md:h-6' : 'w-6 h-6'}/>
            <ApIcon className={adaptive ? 'w-5 h-5 md:w-6 md:h-6' : 'w-6 h-6'}/>
            <div className='flex gap-1.5'>
                <XpIcon/>
                {xp && <span className='!font-semibold text-sm'>{xp} XP</span>}
            </div>
        </div>
    );
};