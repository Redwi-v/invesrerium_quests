import { CrossIcon, FireAnimateIcon, HandAnimateIcon } from '@/shared/images';
import { Box, Modal } from '@mui/material';
import { FC, PropsWithChildren, useEffect } from 'react';
import { Button } from '../../button/ui/button';
import { P } from '../../titles/ui/paragraph';
import { useSearchParams } from 'next/navigation';
interface IPopupProps {
	open: boolean;
	handleClose: () => void;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

const Popup: FC<IPopupProps & PropsWithChildren> = props => {
	const { handleClose, open, children } = props;

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			classes={{
				backdrop: 'backdrop-blur-sm',
			}}
		>
			<Box
				sx={style}
				className='bg-absolute/800 p-6 rounded-3xl 
        max-w-[416px] w-full max-md:max-w-none max-md:rounded-none 
        max-md:!inset-0 max-md:translate-x-0 max-md:translate-y-0 
      
      '
			>
				<Button
					onClick={handleClose}
					buttonStyle='gray'
					className='!p-[10px] min-w-0 absolute right-6 top-6 max-md:top-3 max-md:right-3'
				>
					<CrossIcon className='w-5 h-5' />
				</Button>
				{children}
			</Box>
		</Modal>
	);
};

export default Popup;
