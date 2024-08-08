import { FC, PropsWithChildren } from 'react';

export const H1: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => (
	<h1 className={`font-bold text-3xl ${className}`}>{children}</h1>
);
export const H2: FC<PropsWithChildren & { className?: string }> = ({ children, className }) => (
	<h2 className={`font-bold text-3xl max-[670px]:text-2xl  ${className}`}>{children}</h2>
);
