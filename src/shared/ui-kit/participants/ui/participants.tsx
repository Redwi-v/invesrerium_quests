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
}

export const Participants: FC<ParticipantsProps> = props => {
	const { avatars, bottomLabel, topLabel, className } = props;

	return (
		<div className={`flex gap-2 mt-6 max-[670px]:mt-3 ${className}`}>
			<Avatars className={avatars?.className} />
			<div className='flex flex-col gap-[2px]'>
				<span
					className={` ${topLabel?.className} font-medium text-sm opacity-50 max-[670px]:text-xs`}
				>
					Participants
				</span>
				<span className={` ${bottomLabel?.className} font-semibold text-base max-[670px]:text-xs`}>
					126K / 256K
				</span>
			</div>
		</div>
	);
};

export const Avatars = ({ className }: { className?: string }) => (
	<div className='flex items-center'>
		<Avatar
			className={` ${className} w-[43px] h-[43px] border-[3px] -ml-[3px] border-absolute/800 max-[670px]:w-[34px] max-[670px]:h-[34px]`}
		/>
		<Avatar
			className={` ${className} w-[43px] h-[43px] border-[3px] -ml-5 border-absolute/800 max-[670px]:w-[34px] max-[670px]:h-[34px]`}
		/>
	</div>
);
