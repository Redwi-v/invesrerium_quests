import { cssIf } from '@/shared/utils';
import { FC } from 'react';

export const Spiral: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cssIf(className)}
			width='530'
			height='685'
			viewBox='0 0 530 685'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M3.97852 7.02148C297.943 170.998 289.932 516.982 154.873 468.171C43.3787 427.876 143.696 101.454 391.979 200.521C630.479 295.686 510.478 622.522 277.113 677.021'
				stroke='#8B43FF'
				stroke-opacity='0.1'
				stroke-width='15'
			/>
		</svg>
	);
};
