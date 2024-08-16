'use client';
import React, { FC, ReactElement, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { OutlinedInput } from '@mui/material';
import { ArrowIcon } from '@/shared/images';
import { cssIf } from '@/shared/utils';

interface SelectMenuProps {
	items: FC<{ isActive: boolean }>[];
	className?: string;
	classes?: {
		formControl?: string;
	};
}

export const SelectMenu: React.FC<SelectMenuProps> = ({ items, className, classes }) => {
	const [value, setValue] = React.useState<string | number>(0);
	const [open, setOpen] = React.useState(false);

	const handleChange = (event: SelectChangeEvent<typeof value>) => {
		setValue(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	useEffect(() => {
		const closeModal = () => {
			setOpen(false);
		};
		const closeModalScroll = () => {
			setOpen(false);
		};
		window.addEventListener('scroll', closeModalScroll);
		// window.addEventListener('resize', closeModal);

		return () => {
			window.removeEventListener('scroll', closeModalScroll);
			window.removeEventListener('resize', closeModal);
		};
	}, []);

	return (
		<div className={cssIf(className)}>
			<FormControl
				className={`min-w-[196px] border-0 bg-absolute/100  bg-opacity-[0.07] hover:bg-opacity-15 duration-700 rounded-xl !p-0 transform ${classes?.formControl}`}
			>
				<Select
					labelId='demo-controlled-open-select-label'
					sx={{
						'.MuiOutlinedInput-notchedOutline': { border: 'none', outline: 'none' },
						'.MuiOutlinedInput-input': {
							'padding': '12px 10px',
							'left': 'auto !important',
							'right': '0 !important',

							'div': {
								padding: 0,
								background: 'none',
							},
							'.check': { display: 'none !important' },
						},
					}}
					MenuProps={{
						classes: {
							list: 'p-0 !right-0 !translate-x-0 !left-auto',
							paper:
								'shadow-[0 0 25px 0 rgba(0, 0, 0, 0.5)] p-[12px]  w-[306px] bg-absolute/800 rounded-3xl overflow-hidden !translate-y-[56px]',
						},
						anchorOrigin: {
							vertical: 'top',
							horizontal: 'right',
						},
						transformOrigin: {
							vertical: 'top',
							horizontal: 'right',
						},
						disableScrollLock: true,
					}}
					autoWidth
					id='demo-controlled-open-select'
					className='text-absolute/100 !p-0 '
					open={open}
					onClose={handleClose}
					IconComponent={({ className }) => (
						<div className={cssIf(className)}>
							<ArrowIcon
								className={`-rotate-90 w-[30px] h-[18px] opacity-50 ${cssIf(
									'!opacity-100',
									open,
								)} `}
							/>
						</div>
					)}
					onOpen={handleOpen}
					value={value}
					input={<OutlinedInput className='!-0' />}
					onChange={handleChange}
				>
					{items.map((item, index) => (
						<MenuItem
							className='!bg-transparent w-full !p-0'
							value={index}
							classes={{
								selected: '!bg-transparent',
							}}
						>
							<div className='w-full hover:bg-absolute/100 hover:bg-opacity-15 duration-700 rounded-xl'>
								{item({ isActive: value === index })}
							</div>
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
