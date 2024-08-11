'use client';
import { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { cssIf } from '@/shared/utils';

export const FireAnimateIcon: FC<{ className?: string }> = ({ className }) => {
	return (
		<Player
			src='/animation/fire-icon.json'
			className={`player w-6 h-6 ${cssIf(className)}`}
			loop
			autoplay
		/>
	);
};
