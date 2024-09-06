'use client';
import { Accordion } from '@mui/material';
import { FC } from 'react';

import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ArrowIcon } from '@/shared/images';
import { SimpleLink } from '@/shared/ui-kit/link';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
	return (
		<div className='bg-absolute/800 mt-10 lg:mt-16'>
			<div className='container'>
				<div className="grid pt-6 max-md:pb-6">
					<div className='col-span-full md:col-span-4'>
						<h4 className='!font-semibold text-xl leading-[100%]'>
							Numos
						</h4>
						<p className='mt-3 opacity-50 text-sm'>
							Lorem ipsum dolor sit amet <br className='max-md:hidden' /> consectetur. Diam risus.
						</p>
					</div>
					<div className='col-span-2 max-md:hidden'>
						<h5 className='text-sm mb-3'>Navigations</h5>
						<ul className='flex flex-col gap-2'>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Quests
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									NFTs
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Blockchains
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Communities
								</SimpleLink>
							</li>
						</ul>
					</div>
					<div className='col-span-2 max-md:hidden'>
						<h5 className='text-sm mb-3'>Community</h5>
						<ul className='flex flex-col gap-2'>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Blog
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									X
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Telegram
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Discord
								</SimpleLink>
							</li>
						</ul>
					</div>
					<div className='col-span-2 max-md:hidden'>
						<h5 className='text-sm mb-3'>About</h5>
						<ul className='flex flex-col gap-2'>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Help Center
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Support
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Career
								</SimpleLink>
							</li>
						</ul>
					</div>
					<div className='col-span-2 max-md:hidden'>
						<h5 className='text-sm mb-3'>Developers</h5>
						<ul className='flex flex-col gap-2'>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Analiytics
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Documentation
								</SimpleLink>
							</li>
							<li>
								<SimpleLink
									className='opacity-50 text-sm'
									href={'/'}
								>
									Github
								</SimpleLink>
							</li>
						</ul>
					</div>
				</div>

				<MobileAccordion />

				<div className='grid max-md:gap-y-4 border-t border-border mt-6 py-6 text-sm'>
					<div className="col-span-12 md:col-span-6 lg:col-span-4 max-md:order-last">
						<p className='opacity-50 text-sm'>
							© {new Date().getFullYear()} Numos. All rights reserved.
						</p>
					</div>
					<div className="col-span-6 md:col-span-4 lg:col-span-2">
						<SimpleLink
							href={'/'}
							className='opacity-50 text-sm'
						>
							Terms of Service
						</SimpleLink>
					</div>
					<div className="col-span-6 md:col-span-2">
						<SimpleLink
							href={'/'}
							className='opacity-50 text-sm'
						>
							Privacy Policy
						</SimpleLink>
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
		<div className='hidden max-md:block text-sm'>
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
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
					}}
				>
					<div className='bg-inherit !m-0 min-h-0 text-sm'>
						Navigations
					</div>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='flex flex-col gap-2 pt-[12px]'>
						<li>
							<SimpleLink
								className='opacity-50 text-sm'
								href={'/'}
							>
								Quests
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								NFTs
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Blockchains
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Communities
							</SimpleLink>
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
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
					}}
				>
					<div className='bg-inherit !m-0 min-h-0 text-sm'>Community</div>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='flex flex-col gap-2 pt-[12px]'>
						<li>
							<SimpleLink
								className='opacity-50 text-sm'
								href={'/'}
							>
								Blog
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								X
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Telegram
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Discord
							</SimpleLink>
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
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
					}}
				>
					<div className='bg-inherit !m-0 min-h-0 text-sm'>About</div>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='flex flex-col gap-2 pt-[12px]'>
						<li>
							<SimpleLink
								className='opacity-50 text-sm'
								href={'/'}
							>
								Help Center
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Support
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Career
							</SimpleLink>
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
					className='bg-inherit p-0 m-0 text-absolute/100 !min-h-0'
					classes={{
						content: '!m-0',
						expandIconWrapper: '!transition-none',
					}}
				>
					<div className='bg-inherit !m-0 min-h-0 text-sm'>
						Developers
					</div>
				</AccordionSummary>
				<AccordionDetails className='bg-inherit text-absolute/100 p-0'>
					<ul className='flex flex-col gap-2 pt-[12px]'>
						<li>
							<SimpleLink
								className='opacity-50 text-sm'
								href={'/'}
							>
								Analiytics
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Documentation
							</SimpleLink>
						</li>
						<li>
							<SimpleLink
								className='opacity-50 pt-2 text-sm'
								href={'/'}
							>
								Github
							</SimpleLink>
						</li>
					</ul>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
