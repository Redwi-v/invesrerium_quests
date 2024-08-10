'use client';
import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const FireAnimateIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<Player
			src='/animation/fire-icon.json'
			className={`player w-6 h-6 ${className}`}
			loop
			autoplay
		/>
	);
};
