import { cssIf } from '@/shared/utils';
import { FC, ReactElement } from 'react';
interface ITagProps {
	IconComponent?: ReactElement;
	label: string;
	className?: string;
}

export const Tag: FC<ITagProps> = props => {
	const { IconComponent, label, className } = props;

	return (
		<div
			className={` ${cssIf(
				className,
			)} flex bg-opacity-[0.07] bg-absolute/100 py-[6px] px-4 items-center gap-2 rounded-[100px]`}
		>
			{IconComponent}
			<span className='font-semibold text-sm'>{label}</span>
		</div>
	);
};
