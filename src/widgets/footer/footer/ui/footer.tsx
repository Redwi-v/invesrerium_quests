'use client';
import { Accordion } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import * as React from 'react';
import { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { ArrowIcon } from '@/shared/images';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
	return (
		<div className='bg-tone/200'>
			<div className='custom-container py-7'>
				<div className='flex justify-between border-b pb-6 mb-6 border-border max-[716px]:flex-col max-[716px]:gap-6'>
					<div>
						<h4 className='font-semibold text-lg leading-[100%]'>
							Investerium <br className='' /> Quests
						</h4>
						<p className='mt-3 font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'>
							Lorem ipsum dolor sit amet <br className='max-[716px]:hidden' /> consectetur. Diam
							risus.
						</p>
					</div>
					<div className='flex gap-6 max max-[716px]:hidden'>
						<div className='ml w-[196px] max-[1200px]:w-[136px] max-[960px]:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>Navigations</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Quests
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										NFTs
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Blockchains
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Communities
									</Link>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px] max-[1200px]:w-[136px] max-[960px]:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>Community</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										X
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Telegram
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Discord
									</Link>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px] max-[1200px]:w-[136px] max-[960px]:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>About</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Help Center
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Support
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Career
									</Link>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px] max-[1200px]:w-[136px] max-[960px]:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>Developers</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Analiytics
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Documentation
									</Link>
								</li>
								<li>
									<Link
										className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm'
										href={'/'}
									>
										Github
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<MobileAccordion />
				</div>
				<div className='flex max-[716px]:flex-col max-[716px]:justify-start'>
					<span className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm block text-nowrap max-[960px]:min-w-[336px]'>
						© {new Date().getFullYear()} Stephen King. All rights reserved.
					</span>
					<div className='flex justify-between ml-auto max-[716px]:ml-0 max-[716px]:mt-[18px]'>
						<Link
							href={'/'}
							className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm ml-6 text-nowrap w-[196px] max-[1200px]:w-[136px] max-[960px]:w-[100%] max-[716px]:ml-0'
						>
							Terms of Service
						</Link>
						<Link
							href={'/'}
							className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm ml-6 text-nowrap w-[196px] max-[1200px]:w-[136px] max-[960px]:w-[100%]'
						>
							Privacy Policy
						</Link>
						<Link
							href={'/'}
							className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm ml-6 w-[196px] max-[1200px]:w-[136px] max-[960px]:hidden'
						></Link>
						<Link
							href={'/'}
							className='font-medium text-sm opacity-50 max-[960px]:text-xs max-[716px]:text-sm ml-6 w-[196px] max-[1200px]:w-[136px] max-[960px]:hidden'
						></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const MobileAccordion = () => {
	const [accordion1, setAccordion1] = React.useState(false);
	const [accordion2, setAccordion2] = React.useState(false);
	const [accordion3, setAccordion3] = React.useState(false);
	const [accordion4, setAccordion4] = React.useState(false);

	return (
		<div className='hidden max-[716px]:block'>
			<Accordion
				expanded={accordion1}
				className='bg-inherit shadow-none p-0 min-h-0 !border-0 !shadow-none'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion1(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`rotate-90  opacity-15 ${accordion1 && 'opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0'>Navigations</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[18px]'>
						<li>
							<Link
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Quests
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								NFTs
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Blockchains
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Communities
							</Link>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={accordion2}
				className='bg-inherit shadow-none p-0 min-h-0 before:opacity-0 mt-[18px]'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion2(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`rotate-90  opacity-15 ${accordion2 && 'opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0'>Community</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[18px]'>
						<li>
							<Link
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								X
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Telegram
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Discord
							</Link>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={accordion3}
				className='bg-inherit shadow-none p-0 min-h-0 before:opacity-0 mt-[18px]'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion3(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`rotate-90  opacity-15 ${accordion3 && 'opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0'>About</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[18px]'>
						<li>
							<Link
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Help Center
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Support
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Career
							</Link>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={accordion4}
				className='bg-inherit shadow-none p-0 min-h-0 before:opacity-0 mt-[18px]'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion4(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`rotate-90  opacity-15 ${accordion4 && 'opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0'>Developers</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[18px]'>
						<li>
							<Link
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Analiytics
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Documentation
							</Link>
						</li>
						<li>
							<Link
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Github
							</Link>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
