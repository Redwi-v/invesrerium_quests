import { cssIf } from '@/shared/utils';
import { Avatar } from '@mui/material';
import { FC } from 'react';

interface ParticipantsProps {
	avatars?: {
		className?: string;
	};
	lastAvatarName?: string;

	topLabel?: {
		className?: string;
	};
	bottomLabel?: {
		className?: string;
	};

	className?: string;
	borderColor?: string;
	text?: string;
}

export const Participants: FC<ParticipantsProps> = props => {
	const { avatars, bottomLabel, topLabel, className, borderColor, lastAvatarName, text } = props;

	return (
		<div className={`flex gap-2 mt-6 max-md:mt-3 ${cssIf(className)}`}>
			<Avatars
				className={avatars?.className}
				borderColor={borderColor}
				lastAvatarName={lastAvatarName}
			/>
			<div className='flex flex-col gap-[2px]'>
				<span className={` ${cssIf(topLabel?.className)} text-sm opacity-50 max-md:text-xs`}>
					Participants
				</span>
				<span className={` ${cssIf(bottomLabel?.className)} !font-semibold text-base max-md:text-xs`}>
					{text || '126K / 256K'}
				</span>
			</div>
		</div>
	);
};

export const Avatars = ({
	className,
	borderColor,
	lastAvatarName,
}: {
	className?: string;
	borderColor?: string;
	lastAvatarName?: string;
}) => (
	<div className='flex items-center'>
		<Avatar
			style={{
				borderColor: borderColor,
				transition: 'border .5s',
			}}
			className={` ${cssIf(
				className,
			)} w-[46px] h-[46px] border-[3px] -ml-[3px] border-absolute/800 max-md:w-[40px] max-md:h-[40px] `}
		/>
		<Avatar
			style={{
				borderColor: borderColor,
				transition: 'border .5s',
			}}
			className={` ${cssIf(
				className,
			)} w-[46px] h-[46px] border-[3px] -ml-[24px] border-absolute/800 max-md:w-[40px] max-md:h-[40px] ${lastAvatarName}`}
		/>
	</div>
);
