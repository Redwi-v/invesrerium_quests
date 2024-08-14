import { cssIf } from '@/shared/utils';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type styles = 'green' | 'purple' | 'gray';
interface ButtonProps extends PropsWithChildren {
	className?: string;
	buttonStyle: styles;
}

const buttonStyles: { [key: string]: string } = {
	green: 'bg-green/400 hover:!bg-green/500',
	purple: 'bg-blue/400 hover:!bg-blue/500',
	gray: '!bg-absolute/100 !bg-opacity-[0.07] hover:!bg-opacity-[0.15]',
};

export const Button: FC<ButtonProps & MuiButtonProps> = ({ children, ...muiProps }) => {
	const { className, buttonStyle, ...props } = muiProps;

	const tailwindStyles = buttonStyles[buttonStyle];

	return (
		<MuiButton
			className={`
				${tailwindStyles} 
        ${cssIf(className)}
       text-absolute/100
      	normal-case rounded-xl px-[18px] 
       	py-3 text-base max-md:text-sm max-md:px-3 max-md:py-[10px]
       	font-semibold 
       `}
			{...props}
		>
			{children}
		</MuiButton>
	);
};
