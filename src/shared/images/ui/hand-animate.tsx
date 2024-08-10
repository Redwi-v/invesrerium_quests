'use client';
import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const HandAnimateIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<Player
			src='/animation/hand.json'
			className={`player w-6 h-6 ${className}`}
			loop
			autoplay
		/>
	);
};
