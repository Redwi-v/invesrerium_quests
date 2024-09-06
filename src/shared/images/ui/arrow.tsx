import {cssIf} from '@/shared/utils';
import {FC} from 'react';

export const ArrowIcon: FC<{ className?: string }> = ({className}) => {
    return (
        <svg
            className={cssIf(className)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 17L9 12L15 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
