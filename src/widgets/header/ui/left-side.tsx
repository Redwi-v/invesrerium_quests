import Link from 'next/link';
import { FC } from 'react';

interface LeftSideProps {}

const LeftSide: FC<LeftSideProps> = () => {
	return (
		<div className='flex items-center'>
			<Link
				className='pr-8 text-lg leading-[100%] max-sm:text-sm font-semibold'
				href={'/'}
			>
				Investerium <br /> Quests
			</Link>

			<span className='w-[1px] h-4 bg-absolute/100 opacity-15 mr-8 max-pc:hidden' />
			<Link
				className='text-sm max-pc:hidden duration-500 py-[10px] px-3 rounded-xl leading-5 font-semibold hover:bg-absolute/100 hover:bg-opacity-[0.07] active:bg-opacity-15'
				href={'/quests'}
			>
				Quests
			</Link>
		</div>
	);
};

export default LeftSide;
