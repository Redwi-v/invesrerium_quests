import { Avatar } from '@mui/material';
import { FC } from 'react';
interface ParticipantsProps {
	avatars?: {
		className?: string;
	};

	topLabel?: {
		className?: string;
	};
	bottomLabel?: {
		className?: string;
	};

	className?: string;
	borderColor?: string;
}

export const Participants: FC<ParticipantsProps> = props => {
	const { avatars, bottomLabel, topLabel, className, borderColor } = props;

	return (
		<div className={`flex gap-2 mt-6 max-md:mt-3 ${className}`}>
			<Avatars
				className={avatars?.className}
				borderColor={borderColor}
			/>
			<div className='flex flex-col gap-[2px]'>
				<span className={` ${topLabel?.className} font-medium text-sm opacity-50 max-md:text-xs`}>
					Participants
				</span>
				<span className={` ${bottomLabel?.className} font-semibold text-base max-md:text-xs`}>
					126K / 256K
				</span>
			</div>
		</div>
	);
};

export const Avatars = ({
	className,
	borderColor,
}: {
	className?: string;
	borderColor?: string;
}) => (
	<div className='flex items-center'>
		<Avatar
			style={{
				borderColor: borderColor,
				transition: 'border .2s',
			}}
			className={` ${className} w-[43px] h-[43px] border-[3px] -ml-[3px] border-absolute/800 max-md:w-[34px] max-md:h-[34px]`}
		/>
		<Avatar
			style={{
				borderColor: borderColor,
				transition: 'border .2s',
			}}
			className={` ${className} w-[43px] h-[43px] border-[3px] -ml-5 border-absolute/800 max-md:w-[34px] max-md:h-[34px]`}
		/>
	</div>
);
