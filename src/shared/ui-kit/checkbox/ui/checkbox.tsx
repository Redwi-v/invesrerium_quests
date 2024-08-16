import { CheckedIcon } from '@/shared/images';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { FC } from 'react';
interface ICheckboxProps {
	label: string;
	value: string;
}

export const Checkbox: FC<ICheckboxProps> = props => {
	const { label, value } = props;

	return (
		<FormControlLabel
			value={value}
			className='w-full flex bg-absolute/100 bg-opacity-[.07] m-0 hover:bg-opacity-15 duration-700  rounded-xl p-[10px] pl-[18px]'
			control={
				<MuiCheckbox
					icon={<span className='w-7 h-7 bg-absolute/100 bg-opacity-[0.07] rounded-full' />}
					className='ml-auto p-0'
					checkedIcon={
						<span className='w-7 h-7 bg-blue/400  flex justify-center items-center rounded-full '>
							<CheckedIcon />
						</span>
					}
				/>
			}
			classes={{
				label: 'text-base font-semibold',
			}}
			label={label}
			labelPlacement='start'
		/>
	);
};
