'use state';
import { HeartIcon } from '@/shared/images';
import { cssIf } from '@/shared/utils';
import { FC, useState } from 'react';

interface LikeButtonProps {
	className?: string;
	isLiked?: boolean;
}

const LikeButton: FC<LikeButtonProps> = ({ className, isLiked }) => {
	const [liked, setLiked] = useState(isLiked || false);

	return (
		<button
			onClick={e => {
				e.stopPropagation();
				e.preventDefault();
				setLiked(value => !value);
			}}
			className={`${cssIf(
				className,
			)} bg-absolute/100 md:hover:bg-opacity-[0.07]  active:!bg-opacity-[0.15] p-[6px] flex items-center justify-center rounded-full duration-700 transition-colors bg-opacity-0 max-md:p-[2px]	`}
		>
			<HeartIcon
				className='w-5 h-5 '
				pathClassName={`fill-absolute/100 ${liked ? 'fill-red/400' : ''}`}
			/>
		</button>
	);
};

export default LikeButton;
