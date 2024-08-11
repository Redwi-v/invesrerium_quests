'use state';
import { HeartIcon } from '@/shared/images';
import { cssIf } from '@/shared/utils';
import { FC, useState } from 'react';

interface LikeButtonProps {
	className?: string;
}

const LikeButton: FC<LikeButtonProps> = ({ className }) => {
	const [liked, setLiked] = useState(false);

	return (
		<button
			onClick={e => {
				e.stopPropagation();
				e.preventDefault();
				setLiked(value => !value);
			}}
			className={`${cssIf(
				className,
			)} bg-absolute/100 hover:bg-opacity-[0.07] p-[6px] flex items-center justify-center rounded-full transition-colors bg-opacity-0 max-md:p-[2px]	`}
		>
			<HeartIcon
				className='w-5 h-5 '
				pathClassName={`fill-absolute/100 ${liked ? 'fill-red' : ''}`}
			/>
		</button>
	);
};

export default LikeButton;
