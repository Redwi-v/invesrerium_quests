'use client';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import { ProfileIcon } from '@/shared/images';
import { SettingsIcon } from '@/shared/images';
import { PeoplesIcon } from '@/shared/images';
import { HeartIcon } from '@/shared/images';
import { SwitchIcon } from '@/shared/images';
import { DisconnectIcon } from '@/shared/images';
import Link from 'next/link';

interface IDesktopMenuProps {
	isOpen: boolean;
	className?: string;
}

export const DesktopMenu: React.FC<IDesktopMenuProps> = ({ isOpen, className }) => {
	return (
		<Paper
			className={`absolute right-0 top-[77px] bg-absolute/800 text-left text-absolute/100 p-[12px] shadow-none rounded-3xl ${className} ${
				isOpen ? '' : 'hidden'
			}`}
			sx={{ width: 245 }}
		>
			<MenuList className='flex flex-col gap-1 p-0 '>
				<Link
					href={'/profile'}
					className={`bg-[#3d3d3d] rounded-2xl px-[10px] py-[12px] text-base flex items-center h-12`}
				>
					<ListItemIcon className='mr-2 w-fit !min-w-0'>
						<ProfileIcon />
					</ListItemIcon>
					<ListItemText className='text-sm'>Cut</ListItemText>
				</Link>

				<Link
					href={'/profile'}
					className={`bg-[#3d3d3d] rounded-2xl px-[10px] py-[12px] text-base flex items-center h-12`}
				>
					<ListItemIcon className='mr-2 w-fit !min-w-0'>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText className='text-sm'>Settings</ListItemText>
				</Link>

				<Link
					href={'/profile'}
					className={`bg-[#3d3d3d] rounded-2xl px-[10px] py-[12px] text-base flex items-center h-12`}
				>
					<ListItemIcon className='mr-2 w-fit !min-w-0'>
						<PeoplesIcon />
					</ListItemIcon>
					<ListItemText className='text-sm'>Referral</ListItemText>
				</Link>

				<Link
					href={'/profile'}
					className={`bg-[#3d3d3d] rounded-2xl px-[10px] py-[12px] text-base flex items-center h-12`}
				>
					<ListItemIcon className='mr-2 w-fit !min-w-0'>
						<HeartIcon />
					</ListItemIcon>
					<ListItemText className='text-sm'>Favorite</ListItemText>
				</Link>

				<Link
					href={'/profile'}
					className={`bg-[#3d3d3d] rounded-2xl px-[10px] py-[12px] text-base flex items-center h-12`}
				>
					<ListItemIcon className='mr-2 w-fit !min-w-0'>
						<SwitchIcon />
					</ListItemIcon>
					<ListItemText className='text-sm'>Switch to a company</ListItemText>
				</Link>

				<Link
					href={'/profile'}
					className={`bg-[#3d3d3d] rounded-2xl px-[10px] py-[12px] text-base flex items-center h-12`}
				>
					<ListItemIcon className='mr-2 w-fit !min-w-0'>
						<DisconnectIcon />
					</ListItemIcon>
					<ListItemText className='text-sm'>Disconnect</ListItemText>
				</Link>
			</MenuList>
		</Paper>
	);
};
