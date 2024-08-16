'use client';
import { cssIf } from '@/shared/utils';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactElement, useState } from 'react';

interface IInputProps {
	inputParas: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
	icon?: ReactElement;
	containerClassName?: string;
}

export const Input: FC<IInputProps> = props => {
	const { inputParas: AllInputParams, icon, containerClassName } = props;
	const { className, ...inputParams } = AllInputParams;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`${cssIf(containerClassName)} flex gap-2 p-3 bg-absolute/100 ${cssIf(
				'!bg-opacity-15',
				isHovered,
			)} bg-opacity-[.07] rounded-xl w-min min-w-[424px] transition-colors duration-700 max-lg:min-w-[244px] max-pc:min-w-[404px]`}
		>
			<div
				className={`w-fit [&>*>path]:transition-all [&>*>path]:duration-700 ${cssIf(
					'[&>*>path]:!stroke-absolute/100 ',
					isHovered,
				)}`}
			>
				{icon}
			</div>
			<input
				className={`${cssIf(
					className,
				)} bg-transparent outline-none text-base font-semibold placeholder:text-absolute/100 placeholder:text-opacity-50 w-full`}
				{...inputParams}
			/>
		</div>
	);
};
