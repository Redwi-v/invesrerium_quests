'use client';
import {
	ArrowIcon,
	CopyIcon,
	DiscordIcon,
	GitHubIcon,
	ImageIcon,
	TelegramIcon,
	TwitterIcon,
} from '@/shared/images';
import { Button, H2 } from '@/shared/ui-kit';
import CopyButton from '@/shared/ui-kit/copy-button/ui/copy-button';
import { SuccessNotification } from '@/shared/ui-kit/notifications/indext';
import { Avatar } from '@mui/material';
import { FC, useRef, useState } from 'react';
import { Store } from 'react-notifications-component';
interface IProfilePageEditViewProps {}

const ProfilePageEditView: FC<IProfilePageEditViewProps> = props => {
	const {} = props;

	const copyAddress = (e: any) => {
		e.stopPropagation();
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

	const [image, setImage] = useState('');
	const imageRef = useRef(null);

	function useDisplayImage() {
		const [result, setResult] = useState<any>('');

		function uploader(e: any) {
			if (!e) return;
			const imageFile = e.target.files[0];

			const reader = new FileReader();
			reader.addEventListener('load', e => {
				setResult(e?.target?.result);
			});

			reader.readAsDataURL(imageFile);
		}

		return { result, uploader };
	}

	const { result, uploader } = useDisplayImage();

	return (
		<div className='mt-[42px] bottom-[62px] max-pc:bottom-[42px] max-md:mt-[24px]'>
			<div className='container !max-w-[857px] min-[1024px]:p-0'>
				<div className='flex justify-between items-center max-md:flex-col max-md:items-stretch'>
					<div className='flex items-center gap-[24px] max-md:order-2'>
						<div className='relative w-[112px] h-[112px] max-md:w-[82px] max-md:h-[82px]'>
							<Avatar
								className='w-full h-full'
								src={result}
							/>
							<label
								className='flex justify-center items-center w-[53px] h-[53px] bg-blue/400 
                rounded-full absolute -right-[5px] -bottom-[5px]
                border-bg border-[5px] max-md:w-[36px] max-md:h-[36px] max-md:border-[4px] cursor-pointer duration-500 hover:bg-blue/500 active:bg-blue/600
              '
							>
								<input
									className='hidden'
									accept='image/png, image/gif, image/jpeg'
									type='file'
									onChange={(e: any) => {
										if (!e) return;
										setImage(e.target.files[0]);
										uploader(e);
									}}
								/>
								<span className=''>
									<ImageIcon className='max-md:w-[16px] max-md:h-[16px]' />
								</span>
							</label>
						</div>
						<CopyButton />
					</div>
					<Button
						href={'/profile'}
						buttonStyle='gray'
						className='py-[12px] !px-3 !pr-[20px] flex items-center gap-2 w-fit max-md:order-1 max-md:mb-[42px]'
					>
						<ArrowIcon className='w-6 h-6' />
						<span>Back</span>
					</Button>
				</div>

				<div className='mt-[62px] flex justify-between items-center max-md:mt-[42px]'>
					<div className='flex items-center gap-2'>
						<H2 className='text-2xl'>Wallets</H2>
						<span className='block bg-absolute/100 bg-opacity-[0.07] py-[6px] px-4 rounded-full text-sm font-semibold text-absolute/100 !text-opacity-50'>
							4
						</span>
					</div>

					<Button
						buttonStyle='purple'
						className='!px-[18px] !py-3 !text-base'
					>
						Connect Wallet
					</Button>
				</div>

				<ul className='mt-6 flex flex-col gap-2 '>
					{Array.from(Array(4).keys()).map(index => {
						return (
							<li className='flex justify-between p-4 pr-5 bg-absolute/800 rounded-[32px] items-center'>
								<div className='flex gap-4 items-center max-md:w-[50%] w-fit'>
									<div className='relative min-w-[54px] h-[54px]'>
										<Avatar className='w-full h-full' />
										<span
											className='flex 
                      justify-center items-center w-[25px] h-[25px]
                      rounded-full absolute -right-[3px] 
                      -bottom-[3px] border-bg border-[3px] bg-green/400'
										/>
									</div>
									<div className={`flex flex-col  ${index === 0 && 'max-w-[80%]'}`}>
										<span className='text-base font-medium flex items-center'>
											<span className={`truncate`}>Primary address</span>
											{index === 0 && (
												<span className='py-1 px-[10px] bg-absolute/100 bg-opacity-[0.07] rounded-full ml-2 text-sm font-semibold'>
													Default
												</span>
											)}
										</span>
										<span className='font-medium text-sm opacity-50 mt-1'>OxB046...0a4b</span>
									</div>
								</div>

								<Button
									buttonStyle='gray'
									className='!bg-absolute/100 !bg-opacity-[0.07] !py-[12px] min-w-0 !px-3 flex items-center gap-2 w-fit !text-base'
								>
									Disconnect
								</Button>
							</li>
						);
					})}
				</ul>

				<h2 className='text-2xl font-bold  mt-[62px] max-md:mt-[42px]'>Social Profiles</h2>

				<ul className='mt-6 pb-[62px] max-pc:pb-[42px] flex gap-6 max-md:grid max-md:grid-cols-2 max-md:gap-3'>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit items-center'>
							<TwitterIcon />
							<span className='font-medium text-base'>X (Twitter)</span>
						</div>
						<Button
							buttonStyle='gray'
							className='mt-3 max-w-[160px] w-full'
						>
							Disconnect
						</Button>
					</li>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit items-center'>
							<TelegramIcon className='[&>*>path]:!fill-[#717171] ' />
							<span className='font-medium text-base'>Telegram</span>
						</div>
						<Button
							buttonStyle='purple'
							className='max-w-[160px] w-full mt-3 px-[28px]'
						>
							Connect
						</Button>
					</li>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit items-center'>
							<DiscordIcon />
							<span className='font-medium text-base'>Discord</span>
						</div>
						<Button
							buttonStyle='purple'
							className='max-w-[160px] w-full mt-3 px-[28px]'
						>
							Connect
						</Button>
					</li>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit items-center'>
							<GitHubIcon />
							<span className='font-medium text-base'>Github</span>
						</div>
						<Button
							buttonStyle='purple'
							className='max-w-[160px] w-full mt-3 px-[28px]'
						>
							Connect
						</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfilePageEditView;
