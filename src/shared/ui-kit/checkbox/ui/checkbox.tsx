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
			className='w-full flex bg-tone/200 m-0  rounded-xl p-[10px] pl-[18px]'
			control={
				<MuiCheckbox
					icon={<span className='w-7 h-7 bg-absolute/100 bg-opacity-[0.07] rounded-full' />}
					className='ml-auto p-0'
					checkedIcon={
						<span className='w-7 h-7 bg-blue/400 flex justify-center items-center rounded-full '>
							<CheckedIcon />
						</span>
					}
				/>
			}
			label={label}
			labelPlacement='start'
		/>
	);
};
