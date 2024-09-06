import {cssIf} from '@/shared/utils';
import {FC, PropsWithChildren} from 'react';

interface IIconBoxProps {
    className?: string;
    type?: 'sm' | 'base' | 'xl';
    color: 'green' | 'purple' | 'gray' | 'red';
    adaptive?: boolean;
}

const colors: { [key: string]: string } = {
    green: 'bg-green/400',
    purple: 'bg-blue/400',
    gray: 'bg-tone/200',
    red: 'bg-red/400',
};

export const IconBox: FC<IIconBoxProps & PropsWithChildren> = ({children, className, type = 'base', color, adaptive= false}) => {
    const types: { [key: string]: string } = {
        sm: 'min-w-10 min-h-10 p-2.5',
        base: adaptive ? 'min-w-10 min-h-10 p-2.5 md:min-w-12 md:min-h-12 md:p-3' : 'min-w-12 min-h-12 p-3',
        xl: 'min-w-13 min-h-13 p-3.5',
    };

    const currentSize = types[type];
    const currentColor = colors[color];

    return (
        <div className={`
            rounded-xl
            ${currentSize}
            ${currentColor}
            ${cssIf(className)}
        `}>
            {children}
        </div>
    );
};
