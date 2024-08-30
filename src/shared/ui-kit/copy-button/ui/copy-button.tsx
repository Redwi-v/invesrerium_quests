import { FC, ReactNode, useState } from 'react';
import { IconBox } from '../../icon-box/icon-box';
import { Button } from '../../button/ui/button';
import { CopyIcon } from '@/shared/images';
import { Store } from 'react-notifications-component';
import { SuccessNotification } from '../../notifications/indext';
import { cssIf } from '@/shared/utils';
interface ICopyButtonProps {
	className?: string;
	text?: string | ReactNode;
	iconClassName?: string;
}

const CopyButton: FC<ICopyButtonProps> = props => {
	const { className, text, iconClassName } = props;

	const [isCoped, setISCoped] = useState(false);

	const copyAddress = (e: any) => {
		e.stopPropagation();
		setISCoped(true);

		setTimeout(() => {
			setISCoped(false);
		}, 5000);
		navigator.clipboard.writeText('адрес кошелька полный').then(() => {
			Store.addNotification({
				insert: 'top',
				title: 'Copied',
				container: 'top-right',
				content: SuccessNotification,
				animationIn: ['animate__animated animate__bounceInRight'], // `animate.css v4` classes
				animationOut: [''],
				dismiss: {
					duration: 5000,
					click: false,
				},
			});
		});
	};

	return (
		<Button
			buttonStyle='gray'
			className={`mt-0 !bg-absolute/100 !rounded-2xl  !p-[4px] !pr-3 !bg-opacity-[0.07] flex items-center gap-[6px] ${cssIf(
				className,
			)}`}
			onClick={copyAddress}
		>
			{isCoped ? (
				<span className='font-bold text-base text-absolute/100 text-center px-8 h-10 flex items-center justify-center'>
					Copied
				</span>
			) : (
				<>
					{text || (
						<>
							<Button
								onClick={copyAddress}
								buttonStyle='gray'
								className={`!bg-opacity-[0] !py-[10px] !px-[10px] min-w-0 hover:!bg-opacity-[0.07] !rounded-xl ${cssIf(
									iconClassName,
								)}`}
							>
								<CopyIcon className='w-5 h-5' />
							</Button>
							<span className='font-bold text-base opacity-50'>OxB046...0a4b</span>
						</>
					)}
				</>
			)}
		</Button>
	);
};

export default CopyButton;
