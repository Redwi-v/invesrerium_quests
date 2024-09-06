import {cssIf} from '@/shared/utils';
import {Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {ArrowIcon} from "@/shared/images";

interface ButtonProps extends PropsWithChildren {
    className?: string;
    type?: 'sm' | 'base' | 'xl';
    color: 'green' | 'purple' | 'gray' | 'red';
    arrow?: 'left' | 'right';
    adaptive?: boolean;
}

const colors: { [key: string]: string } = {
    green: 'bg-green/400 hover:!bg-green/500',
    purple: 'bg-blue/400 hover:!bg-blue/500',
    gray: 'bg-tone/200 hover:!bg-tone/300',
    red: 'bg-red/400 hover:!bg-red/500',
};

export const Button: FC<ButtonProps & MuiButtonProps> = ({children, ...muiProps}) => {
    const {type = 'base', color, arrow, adaptive = false, className, ...props} = muiProps;

    const types: { [key: string]: string } = {
        sm: `min-w-10 min-h-10 text-sm py-2.5 ${children ? 'px-3.5' : 'px-2.5'}`,
        base: adaptive ? `min-w-10 min-h-10 text-sm py-2.5 ${children ? 'px-3.5' : 'px-2.5'} md:min-w-12 md:min-h-12 md:text-base md:py-3 ${children ? 'md:px-[18px]' : 'md:px-3'}`
            : `min-w-12 min-h-12 text-base py-3 ${children ? 'px-[18px]' : 'px-3'}`,
        xl: `min-w-13 min-h-13 text-base py-3.5 ${children ? 'px-5' : 'px-3.5'}`,
    };

    const currentSize = types[type];
    const currentColor = colors[color];

    const arrows: { [key: string]: string } = {
        left: `${children && (type === 'sm' ? 'mr-1 -ml-1.5' : 'mr-2 -ml-2')}`,
        right: `rotate-180 ${children && (type === 'sm' ? 'ml-1 -mr-1.5' : 'ml-2 -mr-2')}`,
    };

    const arrowSizes: { [key: string]: string } = {
        sm: `w-5 h-5 min-w-5 min-h-5`,
        base: adaptive ? 'w-5 h-5 min-w-5 min-h-5 md:w-5 h-5 min-w-6 min-md:h-6' : 'w-5 h-5 min-w-6 min-h-6',
        xl: `w-5 h-5 min-w-6 min-h-6`,
    };

    const currentArrow = arrows[arrow];
    const currentArrowSize = arrowSizes[type];

    return (
        <MuiButton
            className={`
                text-absolute/100 !font-semibold normal-case rounded-xl duration-500
                ${currentSize}
                ${currentColor}
                ${cssIf(className)}
           `}
            {...props}
        >
            {children}

            {arrow && <ArrowIcon
                className={`${cssIf(currentArrowSize)} ${cssIf(currentArrow)}`}
            />}
        </MuiButton>
    );
};
