'use client';
import LikeButton from '@/features/like-button/ui/like-button';
import {
	ArrowIcon,
	BaseIcon,
	CheckedIcon,
	CoinIcon,
	CrossIcon,
	CupIcon,
	NetIcon,
	PlusCircle,
	PolygonImage,
	TelegramIcon,
	XpIcon,
} from '@/shared/images';
import { CopyIcon } from '@/shared/images/ui/copy';
import { NftIcon } from '@/shared/images/ui/nft';
import { Avatars, Button, H1, H2, P, Participants, Tag } from '@/shared/ui-kit';
import { Checkbox } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';
interface IQuestPageViewProps {}

export const QuestPageView: FC<IQuestPageViewProps> = props => {
	const {} = props;

	const [step, setStep] = useState(1);
	const [questIsOpen, setQuestIsOpen] = useState(false);
	const steps = 10;

	const nextStep = () => {
		setStep(value => (value >= steps ? steps : value + 1));
	};
	const prevStep = () => {
		setStep(value => (value <= 1 ? 1 : value - 1));
	};

	return (
		<>
			<div className={`custom-container `}>
				<div className='flex gap-6 pt-6 pb-[62px] max-lg:pb-[42px]'>
					<div
						className={`w-full max-w-[856px] max-[680px]:opacity-0 max-[680px]:-z-10 max-[680px]:fixed max-[680px]:left-0 
							 max-[680px]:bottom-0 max-[680px]:top-0 max-[680px]:bg-bg 
							${questIsOpen && '!flex max-[680px]:opacity-100 flex-col overflow-y-auto max-[680px]:!z-40'}`}
					>
						{questIsOpen && (
							<div className=' py-2 border-b border-border'>
								<div className='custom-container flex justify-between items-center'>
									<div className='font-bold text-xl'>Step #{step}</div>
									<button
										className='p-[10px] bg bg-absolute/100 bg-opacity-[0.07] rounded-xl'
										onClick={() => setQuestIsOpen(false)}
									>
										<CrossIcon className='w-5 h-5 ' />
									</button>
								</div>
							</div>
						)}
						<div
							className={`w-full relative flex bg-absolute/800 
								h-[728px] rounded-[32px] px-[82px] justify-center
						 		items-center text-center max-lg:p-6
								max-[680px]:top-0 max-[680px]:bg-transparent 
								${questIsOpen && 'custom-container'}
							`}
						>
							<Image
								src={'/images/stars.png'}
								alt='stars'
								fill
								className='!left-0 !right-0 !top-0 !bottom-auto m-auto !h-fit object-contain absolute'
							/>
							<div className='max-[900px]:w-full'>
								<div className='flex items-center max-[900px]:flex-col'>
									<div className='pr-[52px] border-r border-absolute/100 border-opacity-15 max-[900px]:pr-0 max-[900px]:border-none'>
										<div className='relative w-[200px] h-[200px]'>
											<PolygonImage className='absolute inset-0 object-cover w-full h-full' />
											<CupIcon className='w-[62px] h-[62px] absolute z-10 inset-0 m-auto' />
										</div>
									</div>
									<div className='pl-6  max-[900px]:pl-0 max-[900px]:mt-2'>
										<H1 className='text-4xl mb-6'>Reward</H1>
										<div className='max-[900px]:flex max-[900px]:flex-col max-[900px]:items-center '>
											<div className='flex gap-2 bg-absolute/100 bg-opacity-[0.07] p-[6px] pr-4 items-center rounded-[100px] w-fit'>
												<CoinIcon /> <span>Blockchain</span>
											</div>
											<Button className='bg-green/400 py-[6px] px-4 !rounded-[100px] text-sm mt-2'>
												Default address
											</Button>
										</div>
									</div>
								</div>
								<ul className='mt-8 flex flex-col gap-2 max-[900px]:w-full max-[900px]:[&>li]:w-full'>
									<li className='flex justify-between bg-absolute/100 bg-opacity-[0.07] py-[14px] px-3 rounded-2xl'>
										<span className='font-semibold text-base'>Credential</span>
										<PolygonImage className='w-6 h-6' />
									</li>
									<li className='flex justify-between bg-absolute/100 bg-opacity-[0.07] py-[14px] px-3 rounded-2xl'>
										<span className='font-semibold text-base'>NFT</span>
										<NftIcon className='w-6 h-6' />
									</li>
									<li className='flex justify-between bg-absolute/100 bg-opacity-[0.07] py-[14px] px-3 rounded-2xl'>
										<span className='font-semibold text-base'>Token</span>
										<div className='flex gap-[6px] items-center'>
											<span className='font-semibold text-sm'>30 ETH</span>
											<span className='w-6 h-6 bg-green/400 rounded-full block' />
										</div>
									</li>
									<li className='flex justify-between bg-absolute/100 bg-opacity-[0.07] py-[14px] px-3 rounded-2xl'>
										<span className='font-semibold text-base'>AP</span>
										<div className='flex gap-[6px] items-center'>
											<span className='font-semibold text-sm'>110</span>
											<Image
												src={'/icons/gradientCircle.png'}
												alt='circle'
												fill
												className='min-w-6 h-6 !static '
											/>
										</div>
									</li>
									<li className='flex justify-between bg-absolute/100 bg-opacity-[0.07] py-[14px] px-3 rounded-2xl'>
										<span className='font-semibold text-base'>XP</span>
										<div className='flex gap-[6px] items-center'>
											<span className='font-semibold text-sm'>30 ETH</span>
											<XpIcon />
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div
							className={`w-full mt-6 flex gap-6 
						items-center max-lg:grid max-lg:grid-cols-2 
						max-lg:grid-rows-2 max-lg:gap-0  max-lg:mt-0
						max-lg:auto-rows-min max-[680px]:mt-auto pb-3 ${questIsOpen && 'custom-container'}`}
						>
							<Button
								onClick={prevStep}
								className='!bg-absolute/100 !bg-opacity-[0.07]  flex items-center gap-2 !max-w-[175px] w-full max-lg:row-start-2 max-[900px]:w-fit'
							>
								<ArrowIcon />
								<span>Back</span>
							</Button>
							<div className='flex w-full gap-2 max-lg:col-span-2'>
								{Array.from(Array(steps).keys()).map(index => (
									<span
										className={`h-2 w-full block bg-absolute/100 opacity-[0.07] rounded-[50px] ${
											step > index && 'bg-blue/400 !opacity-100'
										}`}
									/>
								))}
							</div>
							<div className='flex gap-2 !max-w-[175px] w-full max-lg:row-start-2 ml-auto max-[900px]:w-fit'>
								{/* <Button
								onClick={prevStep}
								className='!bg-absolute/100 !bg-opacity-[0.07]  flex items-center gap-2 !max-w-[175px] w-full'
							>
								<span>Skip</span>
							</Button> */}
								<Button
									onClick={nextStep}
									className='flex items-center gap-2 !max-w-[175px] w-full max-[900px]:w-fit max'
								>
									Mint
								</Button>
							</div>
						</div>
					</div>
					<div className=' w-full max-w-[416px] max-[680px]:max-w-none'>
						<div className='flex gap-4 items-start'>
							<H2>Subterra Ordinals 50 Whitelisting Giveaway</H2>
							<LikeButton className='min-w-[40px] min-h-[40px] [&>svg]:w-5 [&>svg]:h-w-5' />
						</div>
						<P className='mt-1'>
							Lorem ipsum dolor sit amet consectetur. Diam aliquet enim montes gravida. Nisl cursus
							ornare feugiat elit nunc nunc. Adipiscing tincidunt tortor volutpat hac dolor
							adipiscing vestibulum. Integer.
						</P>
						<div className='flex gap-2 flex-wrap mt-6'>
							<Tag
								IconComponent={<NetIcon signal={1} />}
								label='Beginer'
							/>
							<Tag
								IconComponent={<BaseIcon />}
								label='Base'
							/>
						</div>
						<div className='flex flex-col mt-6'>
							<div className='bg-absolute/800 p-3 rounded-t-xl flex gap-4 items-center relative'>
								<Image
									src={'/images/avatar.jpg'}
									alt='avatar'
									width={76}
									height={76}
									className='w-[76px] h-[76px] object-cover rounded-xl'
								/>
								<div>
									<span className='text-base font-bold text-absolute/100 mb-2 block'>
										Community name
									</span>
									<P>8 Quests</P>
								</div>
								<Tag
									className='bg-blue/400 !bg-opacity-100 absolute right-3 bottom-[22px] !px-[10px] !py-1 [&>span]:text-xs'
									label='New'
								/>
							</div>
							<div className='pt-3 p-4 bg-absolute/700 rounded-b-xl flex justify-between'>
								<Participants
									className='!mt-0 items-center'
									avatars={{ className: '!border-absolute/700 w-[37px] h-[37px]' }}
									topLabel={{ className: 'text-xs font-medium' }}
									bottomLabel={{ className: 'text-sm' }}
								/>
								<Button className='flex gap-2 !bg-absolute/100 !bg-opacity-[0.07]'>
									<span className='font-semibold text-sm'>Follow</span>
									<PlusCircle />
								</Button>
							</div>
						</div>

						<ul className='mt-6 flex flex-col gap-2'>
							<li className='flex items-center bg-absolute/800 pr-[12px] overflow-hidden rounded-2xl font-semibold'>
								<span className='flex justify-center items-center py-[14px] mr-3 bg-blue/400 w-[52px]'>
									1
								</span>
								<span>Short description</span>
								<span className='ml-auto w-[20px] h-[20px] flex justify-center items-center bg-green/400 rounded-full'>
									<CheckedIcon className='w-[11px]' />
								</span>
							</li>
							<li className='flex items-center bg-absolute/800 pr-[12px] overflow-hidden rounded-2xl font-semibold'>
								<span className='flex justify-center items-center py-[14px] mr-3 bg-blue/400 w-[52px]'>
									1
								</span>
								<span>Short description</span>
								<span className='ml-auto w-[20px] h-[20px] flex justify-center items-center bg-green/400 rounded-full'>
									<CheckedIcon className='w-[11px]' />
								</span>
							</li>
							<li className='flex items-center bg-absolute/800 pr-[12px] overflow-hidden rounded-2xl font-semibold'>
								<span className='flex justify-center items-center py-[14px] mr-3 bg-blue/400 w-[52px]'>
									1
								</span>
								<span>Short description</span>
								<span className='ml-auto w-[20px] h-[20px] flex justify-center items-center bg-green/400 rounded-full'>
									<CheckedIcon className='w-[11px]' />
								</span>
							</li>
						</ul>

						<div className='mt-2 bg-gradient-to-b from-[#41118e] to-[#3a005e] h-[140px] overflow-hidden rounded-2xl flex justify-center items-center relative'>
							<Image
								alt='stars'
								src={'/images/starsPurple.png'}
								width={366}
								height={72}
								className='w-full bottom-auto absolute -top-[40px]'
							/>

							<div className='flex justify-center flex-col gap-3'>
								<span className='text-center font-medium text-sm opacity-50'>Rewards</span>
								<div className='flex gap-3 items-center'>
									<PolygonImage className='w-6 h-6' />
									<NftIcon className='w-6 h-6' />
									<span className='w-[1px] h-4 bg-blue/400' />
									<span className='flex gap-1 items-center'>
										<span className='font-semibold text-sm'>30 ETH</span>
										<span className='w-6 h-6 bg-green/400 rounded-full block' />
									</span>
									<span className='flex gap-1 items-center'>
										<span className='font-semibold text-sm'>180</span>
										<XpIcon />
									</span>
									<span className='flex gap-1 items-center'>
										<span className='font-semibold text-sm'>110</span>
										<Image
											src={'/icons/gradientCircle.png'}
											alt='circle'
											width={24}
											height={24}
											className='min-w-6 h-6 !static '
										/>
									</span>
								</div>
							</div>
						</div>

						<div className='mt-6 flex justify-between items-center pb-6 border-b border-border'>
							<span className='font-medium text-sm opacity-50'>Participants</span>
							<div className='flex items-center gap-2'>
								<Avatars className='!w-[40px] !h-[40px] border-bg ' />
								<span className='font-semibold text-base'>46К / 500К</span>
							</div>
						</div>

						<span className='mt-6 block font-semibold'>Refer friends and earn rewards</span>
						<P className='mt-3'>
							Share this Quest with your friends and earn for every completion.
						</P>

						<div className='flex gap-2 mt-3 max-[900px]:flex-col'>
							<Button className='w-full flex items-center gap-2'>
								<TelegramIcon />
								<span>Share to TG</span>
							</Button>
							<Button className='w-full !bg-absolute/800 flex items-center gap-2'>
								<CopyIcon />
								<span>Copy link</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden fixed left-0 right-0 bottom-0 p-3 bg-bg bg-opacity-80 custom-container z-10 max-[680px]:block'>
				<Button
					onClick={() => setQuestIsOpen(true)}
					className=' !bg-blue/400 !bg-opacity-100 font-semibold text-base w-full flex items-center gap-2'
				>
					<span>Start Quest </span>
					<ArrowIcon className='rotate-180' />
				</Button>
			</div>
		</>
	);
};
