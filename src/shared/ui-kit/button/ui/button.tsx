import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
	className?: string;
}

export const Button: FC<ButtonProps & MuiButtonProps> = ({ children, ...muiProps }) => {
	const { className, ...props } = muiProps;

	return (
		<MuiButton
			className={`
        ${className}
      bg-blue/400 text-absolute/100
       normal-case rounded-xl px-[18px] 
       py-3 hover:opacity-90 
       hover:bg-blue/400 text-base max-sm:text-sm max-sm:px-3 max-sm:py-[10px]
       font-semibold
       `}
			{...props}
		>
			{children}
		</MuiButton>
	);
};
