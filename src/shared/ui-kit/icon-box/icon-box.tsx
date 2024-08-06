import { FC, PropsWithChildren } from 'react';
interface IIconBoxProps {
	className?: string;
}

export const IconBox: FC<IIconBoxProps & PropsWithChildren> = ({ children, className }) => {
	return (
		<div className={`bg-blue/400 p-[14px] rounded-xl max-sm:p-3 max-sm:rounded-xl ${className}`}>
			{children}
		</div>
	);
};
