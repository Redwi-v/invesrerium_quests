import { cssIf } from '@/shared/utils';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactElement } from 'react';

interface IInputProps {
	inputParas: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
	icon?: ReactElement;
	containerClassName?: string;
}

export const Input: FC<IInputProps> = props => {
	const { inputParas: AllInputParams, icon, containerClassName } = props;
	const { className, ...inputParams } = AllInputParams;

	return (
		<div
			className={`${cssIf(
				containerClassName,
			)} flex gap-2 p-3 bg-absolute/100 bg-opacity-[.07] rounded-xl min-w-[404px] max-lg:min-w-0 max-lg:!max-w-[244px]`}
		>
			<div className='w-fit'>{icon}</div>
			<input
				className={`${cssIf(
					className,
				)} bg-transparent outline-none text-base font-semibold placeholder:text-absolute/100 placeholder:text-opacity-50 w-full`}
				{...inputParams}
			/>
		</div>
	);
};
