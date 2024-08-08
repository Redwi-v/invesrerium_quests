import { FC, PropsWithChildren } from 'react';

export const P: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => (
	<h2 className={`font-medium text-base text-absolute/100 text-opacity-50  ${className}`}>
		{children}
	</h2>
);
