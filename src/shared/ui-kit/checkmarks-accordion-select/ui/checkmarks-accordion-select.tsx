'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Checkbox, FormControlLabel } from '@mui/material';
import { ArrowIcon, CircleCross, CrossIcon } from '@/shared/images';

interface CheckmarksAccordionSelectProps {
	items: {
		icon: React.ReactElement;
		label: string;
		checked: boolean;
		name: string;
	}[];

	setChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
	mainLabel: string;
	clearState: () => void;
}

export const CheckmarksAccordionSelect: React.FC<CheckmarksAccordionSelectProps> = ({
	items,
	clearState,
	mainLabel,
	setChecked,
}) => {
	const [expanded, setExpanded] = React.useState<string | false>();

	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

	const activeItems = items.reduce((value, item) => (item.checked ? value + 1 : value), 0);

	return (
		<div>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
				className='!bg-transparent shadow-none !w-full'
			>
				<AccordionSummary
					aria-controls='panel1d-content'
					id='panel1d-header'
					className='m-0 !min-h-fit bg-absolute/100 bg-opacity-[0.07] py-3 px-[10px] rounded-xl '
					classes={{
						content: '!m-0',
						root: '',
					}}
				>
					<Typography className='text-absolute/100 text-base font-semibold  pl-2 flex justify-between w-full items-center'>
						<span className='max-w-[70%] truncate'>{mainLabel}</span>
						<span className='flex gap-[6px] items-center'>
							{activeItems > 0 && (
								<button
									onClick={e => {
										clearState();
										e.stopPropagation();
									}}
									className='bg-blue/400 py-1 px-2 flex gap-1 items-center rounded-[100px]'
								>
									<span className='font-bold text-xs'>{activeItems}</span>
									<CircleCross />
								</button>
							)}
							<ArrowIcon
								className={`-rotate-90 opacity-50 ${expanded && '!-rotate-[270deg]  !opacity-100'}`}
							/>
						</span>
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					className={`mt-1 w-full z-[120] bg-tone/200 rounded-xl p-[10px] max-pc:absolute max-md-xs:static`}
				>
					{items.map(item => (
						<FormControlLabel
							control={
								<Checkbox
									icon={<span className='hidden' />}
									checkedIcon={<span className='w-[20px] h-[20px] rounded-full bg-absolute/100' />}
									className='ml-auto'
									name={item.name}
									onChange={setChecked}
									checked={item.checked}
								/>
							}
							className='flex w-full !m-0 hover:!bg-absolute/100 hover:!bg-opacity-5 rounded-md'
							label={
								<span className='flex gap-2 px-[10px] py-3 w-full mr-auto '>
									{item.icon}
									<span className='text-base font-semibold text-absolute/100'>{item.label}</span>
								</span>
							}
							labelPlacement='start'
						/>
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
