'use client';
import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { cssIf } from '@/shared/utils';

export const HandAnimateIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<Player
			src='/animation/hand.json'
			className={`player w-6 h-6 ${cssIf(className)}`}
			loop
			autoplay
		/>
	);
};
