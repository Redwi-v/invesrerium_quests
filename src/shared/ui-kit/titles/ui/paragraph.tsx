import { cssIf } from '@/shared/utils';
import { FC, PropsWithChildren } from 'react';

export const P: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => (
	<p className={`text-base text-absolute/100 text-opacity-50  ${cssIf(className)}`}>
		{children}
	</p>
);
