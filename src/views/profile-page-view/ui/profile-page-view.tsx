'use client';
import {
	CupIcon,
	FireIcon,
	HeartIcon,
	PeoplesIcon,
	PlusCircle,
	ReferralsIcon,
	StarIcon,
} from '@/shared/images';
import { CopyIcon } from '@/shared/images/ui/copy';
import { Button, IconBox } from '@/shared/ui-kit';
import { Avatar, Box } from '@mui/material';
import { FC, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { QuestCard } from '@/entities/quest';
import { useWindowSize } from '../../../shared/hooks/scripts/use-window-size';
import { Store } from 'react-notifications-component';
import { SuccessNotification } from '@/shared/ui-kit/notifications/indext';

interface IProfilePageViewProps {}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			className='mb-[62px] max-pc:mb-[42px]'
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <div className='pt-6'>{children}</div>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		'id': `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const ProfilePageView: FC<IProfilePageViewProps> = props => {
	const {} = props;

	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const copyAddress = (e: any) => {
		e.stopPropagation();
		navigator.clipboard.writeText('адрес кошелька полный').then(() => {
			Store.addNotification({
				insert: 'top',
				title: 'Copied',
				container: 'top-right',
				content: SuccessNotification,
				animationIn: ['animate__animated animate__bounceInRight'], // `animate.css v4` classes
				animationOut: [''],
				dismiss: {
					duration: 5000,
					click: false,
				},
			});
		});
	};

	const windowWidth = useWindowSize();

	return (
		<div>
			<div className='custom-container relative'>
				<Button
					buttonStyle='gray'
					href='/profile/edit'
					className='flex items-center gap-2 absolute top-[42px] right-[14px] max-pc:hidden !py-[12px] !pl-[12px] !pr-5'
				>
					<PlusCircle />
					<span>Edit Profile</span>
				</Button>

				<div className='flex flex-col items-center pt-[42px]'>
					<div className='block absolute -top-[160px] -z-[1] bg-blue/400 blur-[150px] w-[300px] h-[300px] rounded-full' />
					<Avatar className='w-[196px] h-[196px] max-pc:w-[136px] max-pc:h-[136px]' />
					<button onClick={copyAddress}>
						<IconBox className='!bg-absolute/100 !rounded-2xl !p-[4px] !pr-3 !bg-opacity-[0.07] mt-6 flex items-center gap-[6px]'>
							<Button
								onClick={copyAddress}
								buttonStyle='gray'
								className='!bg-opacity-[0] !p-[10px] min-w-0 hover:!bg-opacity-[0.07] !rounded-xl'
							>
								<CopyIcon className='w-5 h-5' />
							</Button>
							<span className='font-bold text-base opacity-50'>OxB046...0a4b</span>
						</IconBox>
					</button>

					<div className='mt-2 w-[416px] max-md:w-full'>
						<div className='flex items-center'>
							<div className=' relative z-10 min-w-[44px] h-[44px] bg-blue/400 flex justify-center items-center font-bold text-lg rounded-full border-[4px] border-bg'>
								6
							</div>
							<div className='relative bg-absolute/700 rounded-[100px] w-[416px] h-3 -ml-3 overflow-hidden max-md:w-full'>
								<span className='absolute left-0 w-[40%] bg-blue/400 h-full' />
							</div>
						</div>
						<span className='ml-auto block w-fit font-medium text-base opacity-50 -mt-3'>
							50/100 xp
						</span>
					</div>
				</div>

				<div className='flex w-full gap-[24px] mt-[24px] max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 max-md:gap-2'>
					<IconBox className='!bg-absolute/800 flex items-center w-full !p-[12px] !rounded-2xl '>
						<IconBox className='flex justify-center items-center !w-[52px] !h-[52px] !rounded-2xl'>
							<FireIcon />
						</IconBox>
						<div className='flex flex-col gap-[6px] ml-2'>
							<span className='text-sm font-semibold opacity-50'>GM Streak</span>
							<span className='font-bold text-lg'>
								6 <span className='font-medium opacity-50'>d</span>
							</span>
						</div>
					</IconBox>
					<IconBox className='!bg-absolute/800 flex items-center w-full !p-[12px] !rounded-2xl '>
						<IconBox className='flex justify-center items-center !w-[52px] !h-[52px] !rounded-2xl'>
							<StarIcon />
						</IconBox>
						<div className='flex flex-col gap-[6px] ml-2'>
							<span className='text-sm font-semibold opacity-50'>Quests</span>
							<span className='font-bold text-lg'>124</span>
						</div>
					</IconBox>
					<IconBox className='!bg-absolute/800 flex items-center w-full !p-[12px] !rounded-2xl '>
						<IconBox className='flex justify-center items-center !w-[52px] !h-[52px] !rounded-2xl'>
							<CupIcon />
						</IconBox>
						<div className='flex flex-col gap-[6px] ml-2'>
							<span className='text-sm font-semibold opacity-50'>Rewards</span>
							<span className='font-bold text-lg'>$ 125.09</span>
						</div>
					</IconBox>
					<IconBox className='!bg-absolute/800 flex items-center w-full !p-[12px] !rounded-2xl '>
						<IconBox className='flex justify-center items-center !w-[52px] !h-[52px] !rounded-2xl'>
							<ReferralsIcon />
						</IconBox>
						<div className='flex flex-col gap-[6px] ml-2'>
							<span className='text-sm font-semibold opacity-50'>Referrals</span>
							<span className='font-bold text-lg'>6</span>
						</div>
					</IconBox>
				</div>

				<div className='w-full border-b border-absolute/100 border-opacity-15 mt-[42px] max-md:border-hidden'>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='basic tabs example'
						className='flex '
						centered
						variant={windowWidth.width < 768 ? 'scrollable' : 'standard'}
						scrollButtons={false}
						classes={{
							indicator: 'bg-blue/400 max-md:hidden',
						}}
					>
						<Tab
							classes={{
								selected:
									'!text-absolute/100 [&>*>svg>path]:!fill-absolute/100 max-md:bg-blue/400 max-md:!bg-opacity-100 max-md:[&>*>.count]:!bg-blue/500',
							}}
							className='rounded-xl max-md:bg-absolute/100 max-md:bg-opacity-[0.07] text-base font-semibold text-absolute/100 text-opacity-50 normal-case'
							label={
								<span className='flex gap-2 items-center'>
									<HeartIcon className='' />{' '}
									<span className='font-semibold text-base'>Favorite</span>{' '}
									<span className='count max-h-[20px] !bg-blue/400 !bg-opacity-100 px-[9px] py-[2px] rounded-[100px] font-bold text-xs flex justify-center items-center text-absolute/100'>
										8
									</span>
								</span>
							}
							{...a11yProps(0)}
						/>
						<Tab
							classes={{
								selected:
									'!text-absolute/100 [&>*>svg>path]:!fill-absolute/100 max-md:bg-blue/400 max-md:bg-opacity-100 max-md:!bg-opacity-100 max-md:[&>*>.count]:!bg-blue/500',
							}}
							className='rounded-xl max-md:bg-absolute/100 max-md:bg-opacity-[0.07] max-md:ml-4 text-base font-semibold text-absolute/100 text-opacity-50 normal-case'
							label={
								<span className='flex gap-2 items-center'>
									<StarIcon className='' />{' '}
									<span className='font-semibold text-base'>Completed Quest</span>{' '}
									<span className='count max-h-[20px] !bg-blue/400 !bg-opacity-100 px-[9px] py-[2px] rounded-[100px] font-bold text-xs flex justify-center items-center text-absolute/100'>
										52
									</span>
								</span>
							}
							{...a11yProps(0)}
						/>
					</Tabs>
				</div>

				<CustomTabPanel
					value={value}
					index={0}
				>
					<div className='grid grid-cols-4 gap-6 max-pc:grid-cols-3 max-lg:grid-cols-2'>
						{Array.from(Array(10).keys()).map(index => {
							return (
								<QuestCard
									className='!pl-0'
									title={'Celosphere Summer: Mint “Ego” by Mad in Pixel' + index.toString()}
									completed
									liked
								/>
							);
						})}
					</div>
				</CustomTabPanel>
				<CustomTabPanel
					value={value}
					index={1}
				>
					<div className='grid grid-cols-4 gap-6 max-pc:grid-cols-3 max-lg:grid-cols-2'>
						{Array.from(Array(4).keys()).map(index => {
							return (
								<QuestCard
									className='!pl-0'
									title={'Celosphere Summer: Mint “Ego” by Mad in Pixel' + index.toString()}
									completed
								/>
							);
						})}
					</div>
				</CustomTabPanel>
			</div>
		</div>
	);
};

export default ProfilePageView;
