import { FC, PropsWithChildren } from 'react';

export const P: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => (
	<p className={`font-medium text-base text-absolute/100 text-opacity-50  ${className}`}>
		{children}
	</p>
);
