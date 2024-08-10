'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
interface ILinkWithBorderProps {}

export const LinkWithBorder: FC<ILinkWithBorderProps> = props => {
	const {} = props;

	const [isActive, setIsActive] = useState(false);

	const text = 'hello 123 12 123';

	return (
		<Link
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
			className=' w-fit flex flex-wrap '
			href={'/main'}
		>
			{text.split(' ').map(word => (
				<span className='relative'>
					<span
						style={{
							transform: isActive ? 'translateY(-3px)' : '',
							transition: 'transform .4s',
							display: 'inline-block',
						}}
						className='text-blue/400 block my_title mr-1 text-xl leading-1'
					>
						{word}
					</span>
					<span
						style={{
							transition: 'all .2s',
							margin: '-4px',
							opacity: isActive ? 1 : 0,
						}}
						className='w-full bg-blue/400 h-[1px] block absolute left-0 right-0'
					/>
				</span>
			))}
		</Link>
	);
};
