'use state';
import { HeartIcon } from '@/shared/images';
import { FC, useState } from 'react';

interface LikeButtonProps {
	className?: string;
}

const LikeButton: FC<LikeButtonProps> = ({ className }) => {
	const [liked, setLiked] = useState(false);

	return (
		<button
			onClick={() => setLiked(value => !value)}
			className={`${className}`}
		>
			<HeartIcon
				className='w-5 h-5'
				pathClassName={`fill-absolute/100 ${liked ? 'fill-blue/400' : ''}`}
			/>
		</button>
	);
};

export default LikeButton;
