import {cssIf} from '@/shared/utils';
import {FC, PropsWithChildren} from 'react';

export const H1: FC<PropsWithChildren & { className?: string }> = ({children, className}) => (
    <h1 className={`!font-bold text-3xl ${cssIf(className)}`}>
        {children}
    </h1>
);
export const H2: FC<PropsWithChildren & { className?: string }> = ({children, className}) => (
    <h2 className={`!font-bold text-3xl max-md:text-2xl ${cssIf(className)}`}>
        {children}
    </h2>
);
