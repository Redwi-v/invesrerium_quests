'use client';
import React, { FC, ReactElement } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { OutlinedInput } from '@mui/material';
import { ArrowIcon } from '@/shared/images';

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

	return (
		<div className={className}>
			<FormControl
				className={`min-w-[196px] border-0 bg-absolute/100  bg-opacity-[0.07] rounded-xl !p-0 transform ${classes?.formControl}`}
			>
				<Select
					labelId='demo-controlled-open-select-label'
					sx={{
						'.MuiOutlinedInput-notchedOutline': { border: 'none', outline: 'none' },
						'.MuiOutlinedInput-input': {
							'padding': '12px 10px',
							'div': { padding: 0 },
							'.check': { display: 'none !important' },
						},
					}}
					MenuProps={{
						classes: {
							list: 'p-0',
							paper:
								'shadow-[0 0 25px 0 rgba(0, 0, 0, 0.5)] bg-absolute/800 rounded-3xl overflow-hidden w-[306px] right-0 !-translate-x-[52px] !translate-y-[8px] max-md-xs:!translate-x-0',
						},
					}}
					id='demo-controlled-open-select'
					className='text-absolute/100 !p-0'
					open={open}
					onClose={handleClose}
					IconComponent={({ className }) => (
						<div className={className}>
							<ArrowIcon className={`rotate-90 w-[30px] h-[18px]`} />
						</div>
					)}
					onOpen={handleOpen}
					value={value}
					input={<OutlinedInput className='!-0' />}
					onChange={handleChange}
				>
					{items.map((item, index) => (
						<MenuItem
							className=''
							value={index}
						>
							{item({ isActive: value === index })}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
