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
import { Avatar } from '@mui/material';
import { FC } from 'react';
interface IProfilePageEditViewProps {}

const ProfilePageEditView: FC<IProfilePageEditViewProps> = props => {
	const {} = props;

	return (
		<div className='mt-[42px] bottom-[62px] max-lg:bottom-[42px] max-[530px]:mt-[24px]'>
			<div className='custom-container !max-w-[857px] min-[1024px]:p-0'>
				<div className='flex justify-between items-center max-[530px]:flex-col max-[530px]:items-stretch'>
					<div className='flex items-center gap-[24px] max-[530px]:order-2'>
						<div className='relative w-[112px] h-[112px] max-[530px]:w-[82px] max-[530px]:h-[82px]'>
							<Avatar className='w-full h-full' />
							<label
								className='flex justify-center items-center w-[53px] h-[53px] bg-blue/400 
                rounded-full absolute -right-[5px] -bottom-[5px]
                border-bg border-[5px] max-[530px]:w-[36px] max-[530px]:h-[36px] max-[530px]:border-[4px]
              '
							>
								<input
									className='hidden'
									accept='image/png, image/gif, image/jpeg'
									type='file'
								/>
								<span className=''>
									<ImageIcon className='max-[530px]:w-[16px] max-[530px]:h-[16px]' />
								</span>
							</label>
						</div>
						<Button className='p-[12px] pl-[14px] !bg-absolute/100 !bg-opacity-[0.07] flex items-center gap-4 !rounded-2xl'>
							<CopyIcon />
							<span className='text-base opacity-50'>OxB046...0a4b</span>
						</Button>
					</div>
					<Button
						href={'/profile'}
						className='!bg-absolute/100 !bg-opacity-[0.07] py-[14px] px-3 flex items-center gap-2 w-fit max-[530px]:order-1 max-[530px]:mb-[42px]'
					>
						<ArrowIcon />
						<span>Back</span>
					</Button>
				</div>

				<div className='mt-[62px] flex justify-between items-center max-[530px]:mt-[42px]'>
					<div className='flex items-center gap-2'>
						<H2 className='text-2xl'>Wallets</H2>
						<span className='block bg-absolute/100 bg-opacity-[0.07] py-[6px] px-4 rounded-full text-sm font-semibold text-absolute/100 !text-opacity-50'>
							4/15
						</span>
					</div>

					<Button>Connect Wallet</Button>
				</div>

				<ul className='mt-6 flex flex-col gap-2 '>
					{Array.from(Array(4).keys()).map(index => {
						return (
							<li className='flex justify-between p-4 pr-5 bg-absolute/800 rounded-[32px] items-center'>
								<div className='flex gap-4 items-center'>
									<div className='relative min-w-[54px] h-[54px]'>
										<Avatar className='w-full h-full' />
										<span
											className='flex 
                      justify-center items-center w-[25px] h-[25px]
                    bg-blue/400 rounded-full absolute -right-[3px] 
                      -bottom-[3px] border-bg border-[3px] bg-green/400'
										/>
									</div>
									<div className={`flex flex-col ${index === 0 && 'max-w-[79%]'}`}>
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

								<Button className='!bg-absolute/100 !bg-opacity-[0.07] py-[14px] px-3 flex items-center gap-2 w-fit'>
									Edit
								</Button>
							</li>
						);
					})}
				</ul>

				<h2 className='text-2xl mt-[62px] max-[530px]:mt-[42px]'>Social Profiles</h2>

				<ul className='mt-6 pb-[62px] max-lg:pb-[42px] flex gap-6 max-md:grid max-md:grid-cols-2 max-md:gap-3'>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit'>
							<TwitterIcon />
							<span className='font-medium text-base'>X (Twitter)</span>
						</div>
						<Button className='!bg-absolute/100 !bg-opacity-[0.07] mt-3 max-w-[160px] w-full'>
							Disconnect
						</Button>
					</li>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit'>
							<TelegramIcon className='[&>*>path]:!fill-[#717171] ' />
							<span className='font-medium text-base'>Telegram</span>
						</div>
						<Button className='max-w-[160px] w-full mt-3 px-[28px]'>Connect</Button>
					</li>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit'>
							<DiscordIcon />
							<span className='font-medium text-base'>Discord</span>
						</div>
						<Button className='max-w-[160px] w-full mt-3 px-[28px]'>Connect</Button>
					</li>
					<li className='p-4 pr-5 !pt-6 bg-absolute/800 rounded-3xl text-center w-full'>
						<div className='flex gap-5 mx-auto w-fit'>
							<GitHubIcon />
							<span className='font-medium text-base'>Github</span>
						</div>
						<Button className='max-w-[160px] w-full mt-3 px-[28px]'>Connect</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfilePageEditView;
