import { CopyIcon, CupIcon, FireIcon, InviteIcon, TelegramIcon } from '@/shared/images';
import { Button, H2, IconBox, P } from '@/shared/ui-kit';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IReferralsPageViewProps {}

const ReferralsPageView: FC<IReferralsPageViewProps> = props => {
	const {} = props;

	return (
		<div>
			<div className='container mt-6 pb-[62px] max-lg:pb-[42px]'>
				<div className='flex gap-6'>
					<div className='w-full bg-absolute/800 rounded-3xl overflow-hidden flex h-[600px]'>
						<div className='w-full px-[62px] flex justify-center items-center'>
							<div>
								<h1 className='text-5xl !font-bold mb-4'>Refer a Friend, Earn rewards!</h1>
								<P>
									Share the love! Get Quest completions from referrals, Collect AP, and increase
									level!
								</P>

								<div className='flex gap-2 mt-[42px]'>
									<Button
										color='purple'
										className=' py-[14px] pl-3 pr-5'
									>
										<TelegramIcon />
										<span className='ml-2'>Share to Telegram</span>
									</Button>
									<Button
										color='gray'
										className='py-[14px] pl-3 pr-5'
									>
										<CopyIcon className='-mb-[2px]' />
										<span className='ml-2'>Copy link</span>
									</Button>
								</div>
							</div>
						</div>
						<div className='bg-blue/400 max-w-[306px] w-full'>
							<ul className='flex flex-col w-full h-full justify-center items-center gap-6'>
								<li className='flex flex-col gap-2 pb-6 border-b border-absolute/100 border-opacity-15 max-w-[182px] w-full'>
									<span className='text-base font-medium opacity-50'>Total Referral</span>
									<span className='font-bold text-5xl'>12</span>
								</li>
								<li className='flex flex-col gap-2 pb-6 border-b border-absolute/100 border-opacity-15 max-w-[182px] w-full'>
									<span className='text-base font-medium opacity-50'>Total Reward</span>
									<span className='font-bold text-5xl'>234$</span>
								</li>
								<li className='flex flex-col gap-2 max-w-[182px] w-full'>
									<span className='text-base font-medium opacity-50'>Points</span>
									<span className='font-bold text-5xl'>123</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='max-w-[306px] w-full bg-absolute/800 rounded-[32px] overflow-hidden'>
						<Image
							src={'/images/referralsBanner.jpg'}
							alt='referrals banner'
							width={306}
							height={384}
							quality={100}
							className='w-full'
						/>
						<div className='p-4'>
							<H2 className='text-2xl'>Your tier system</H2>
							<P>Raise lvl to unlock a new tier</P>
							<ul className='flex flex-col gap-2 mt-4'>
								<li className='flex items-center w-full justify-between p-2 pl-[18px] bg-gradient-to-l from-[#4D09BB] to-transparent to-80% rounded-[100px]'>
									<span className='text-sm font-bold'>1 Tier</span>
									<span className='text-sm font-semibold py-[6px] px-4 bg-blue/400 rounded-full '>
										25%
									</span>
								</li>
								<li className='flex items-center w-full justify-between p-2 pl-[18px] bg-gradient-to-l from-[#4D09BB] to-transparent to-80% rounded-[100px]'>
									<span className='text-sm font-bold'>2 Tier</span>
									<span className='text-sm font-semibold py-[6px] px-4 bg-blue/400 rounded-full '>
										10%
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<ul className='mt-[14px] flex gap-6'>
					<li className='flex items-center flex-col text-center px-8 py-4 bg-absolute/800 rounded-3xl w-full'>
						<IconBox className='w-fit'>
							<InviteIcon />
						</IconBox>
						<span className='font-semibold text-base mt-3'>Invite friends</span>
						<P className='text-sm mt-3'>Share your unique referral link with a friend.</P>
					</li>
					<li className='flex items-center flex-col text-center px-8 py-4 bg-absolute/800 rounded-3xl w-full'>
						<IconBox className='w-fit'>
							<FireIcon />
						</IconBox>
						<span className='font-semibold text-base mt-3'>GM Streak</span>
						<P className='text-sm mt-3'>Keep up your GM streak daily.</P>
					</li>
					<li className='flex items-center flex-col text-center px-8 py-4 bg-absolute/800 rounded-3xl w-full'>
						<IconBox className='w-fit bg-green/400'>
							<CupIcon />
						</IconBox>
						<span className='font-semibold text-base mt-3'>Earn Rewards</span>
						<P className='text-sm mt-3'>Earn amazing rewards using your gems</P>
					</li>
				</ul>

				<TierList />
			</div>
		</div>
	);
};

const TableItem: FC<PropsWithChildren & TableCellProps> = ({ children, ...props }) => {
	return (
		<TableCell
			{...props}
			className={` item p-0 !text-absolute/100 border-none  ${props.className}`}
		>
			{children}
		</TableCell>
	);
};

const TierList = () => {
	function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9),
	];
	return (
		<div className='mt-[42px]'>
			<H2>My referrals (tier #1)</H2>

			<div className='mt-[24px]'>
				<TableContainer
					className='!bg-transparent shadow-none'
					component={Paper}
				>
					<Table
						className='!border-none'
						sx={{ minWidth: 650 }}
						aria-label='simple table'
					>
						<TableHead>
							<TableRow>
								<TableItem
									className='p-0'
									align='left'
								>
									#
								</TableItem>
								<TableItem align='left'>Name</TableItem>
								<TableItem align='right'>GM streak</TableItem>
								<TableItem align='right'>NFT Minted</TableItem>
								<TableItem align='right'>Quests</TableItem>
							</TableRow>
						</TableHead>
						<TableBody className='[&>.wrapper:not(:last-child)]:!pb-6'>
							{rows.map((row, index) => (
								<TableRow
									key={index + 1}
									className='wrapper'
								>
									<TableItem className='w-min'>{index + 1}</TableItem>
									<TableItem align='left'>{row.name}</TableItem>
									<TableItem align='right'>{row.calories}</TableItem>
									<TableItem align='right'>{row.fat}</TableItem>
									<TableItem align='right'>{row.carbs}</TableItem>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default ReferralsPageView;
