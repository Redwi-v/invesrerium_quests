'use client';
import { Accordion } from '@mui/material';
import { FC } from 'react';

import * as React from 'react';
import { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { ArrowIcon } from '@/shared/images';
import { SipleLink } from '@/shared/ui-kit/link';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
	return (
		<div className='bg-tone/200'>
			<div className='custom-container py-7'>
				<div className='flex justify-between border-b pb-6 mb-6 border-border max-md:flex-col max-lg:gap-6'>
					<div>
						<h4 className='font-semibold text-lg leading-[100%]'>
							Investerium <br className='' /> Quests
						</h4>
						<p className='mt-3 font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'>
							Lorem ipsum dolor sit amet <br className='max-md:hidden' /> consectetur. Diam risus.
						</p>
					</div>
					<div className='flex gap-6 max max-md:hidden'>
						<div className='ml w-[196px] max-pc:w-[136px] max-lg:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>Navigations</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Quests
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										NFTs
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Blockchains
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Communities
									</SipleLink>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px] max-pc:w-[136px] max-lg:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>Community</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Blog
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										X
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Telegram
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Discord
									</SipleLink>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px] max-pc:w-[136px] max-lg:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>About</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Help Center
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Support
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Career
									</SipleLink>
								</li>
							</ul>
						</div>
						<div className='ml w-[196px] max-pc:w-[136px] max-lg:w-[96px]'>
							<h5 className='font-medium text-sm mb-3'>Developers</h5>
							<ul className='flex flex-col gap-2'>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Analiytics
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Documentation
									</SipleLink>
								</li>
								<li>
									<SipleLink
										className='font-medium text-sm opacity-50 max-lg:text-xs max-md:text-sm'
										href={'/'}
									>
										Github
									</SipleLink>
								</li>
							</ul>
						</div>
					</div>
					<MobileAccordion />
				</div>
				<div className='flex max-md:flex-col max-md:justify-start'>
					<span className='font-medium w-[416px] max-pc:w-[296px] text-sm opacity-50 max-lg:text-xs max-md:text-sm block text-nowrap'>
						© {new Date().getFullYear()} Stephen King. All rights reserved.
					</span>
					<div className='flex mr-auto justify-between max-lg:w-full max-md:mt-[18px] '>
						<SipleLink
							href={'/'}
							className='font-medium max-md:!text-left max-lg:text-right text-sm opacity-50 max-lg:text-xs max-md:text-sm max ml-6 text-nowrap w-[196px] max-pc:w-[136px] max-lg:w-[100%] max-md:ml-0'
						>
							Terms of Service
						</SipleLink>
						<SipleLink
							href={'/'}
							className='font-medium max-md:!text-left max-lg:text-right max-lg:mr-6 text-sm opacity-50 max-lg:text-xs max-md:text-sm ml-6 text-nowrap w-[196px] max-pc:w-[136px] max-lg:w-[100%]'
						>
							Privacy Policy
						</SipleLink>
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
		<div className='hidden max-md:block'>
			<Accordion
				expanded={accordion1}
				className='bg-inherit p-0 min-h-0 !border-0 !shadow-none'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion1(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`-rotate-90 opacity-15 ${accordion1 && '!opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0 text-sm font-medium'>
						Navigations
					</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[12px]'>
						<li>
							<SipleLink
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Quests
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								NFTs
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Blockchains
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Communities
							</SipleLink>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={accordion2}
				className='bg-inherit shadow-none p-0 min-h-0 before:opacity-0 !mt-[18px]'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion2(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`-rotate-90  opacity-15 ${accordion2 && '!opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0 text-sm font-medium'>Community</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[12px]'>
						<li>
							<SipleLink
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Blog
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								X
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Telegram
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Discord
							</SipleLink>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={accordion3}
				className='bg-inherit shadow-none p-0 min-h-0 before:opacity-0 !mt-[18px]'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion3(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon className={`-rotate-90  opacity-15 ${accordion3 && '!opacity-100'}`} />
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none'
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0 text-sm font-medium'>About</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[12px]'>
						<li>
							<SipleLink
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Help Center
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Support
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Career
							</SipleLink>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={accordion4}
				className='bg-inherit shadow-none p-0 min-h-0 before:opacity-0 !mt-[18px]'
				sx={{ 'boxShadow': 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
				onChange={() => {
					setAccordion4(value => !value);
				}}
			>
				<AccordionSummary
					expandIcon={
						<ArrowIcon
							className={`-rotate-90 !transition-none opacity-15 ${accordion4 && '!opacity-100'}`}
						/>
					}
					aria-controls='panel1-content'
					id='panel1-header'
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
						
					}}
				>
					<Typography className='bg-inherit !m-0 min-h-0 text-sm font-medium'>
						Developers
					</Typography>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='pt-[12px]'>
						<li>
							<SipleLink
								className='font-medium opacity-50 text-sm'
								href={'/'}
							>
								Analiytics
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Documentation
							</SipleLink>
						</li>
						<li>
							<SipleLink
								className='font-medium opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Github
							</SipleLink>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
