import {cssIf} from '@/shared/utils';
import {FC} from 'react';

interface ISeparatorProps {
    className?: string;
}

export const Separator: FC<ISeparatorProps> = ({className}) => {
    return (
        <div className={`border-b border-tone/300 ${cssIf(className)}`}></div>
    );
};
