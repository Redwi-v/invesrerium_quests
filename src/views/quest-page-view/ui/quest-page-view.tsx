'use client';
import LikeButton from '@/features/like-button/ui/like-button';
import { useWindowSize } from '@/shared/hooks';
import {
	ArrowIcon,
	BaseIcon,
	CheckedIcon,
	CheckedIconCircle,
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
import { KeyIcon } from '@/shared/images/ui/key';
import { NftIcon } from '@/shared/images/ui/nft';
import { SmallArrow } from '@/shared/images/ui/smallArrow';
import { Avatars, Button, H1, H2, P, Participants, Tag } from '@/shared/ui-kit';
import CopyButton from '@/shared/ui-kit/copy-button/ui/copy-button';
import { SuccessNotification } from '@/shared/ui-kit/notifications/indext';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { Store } from 'react-notifications-component';
interface IQuestPageViewProps {}

export const QuestPageView: FC<IQuestPageViewProps> = props => {
	const {} = props;

	const windowSize = useWindowSize();
	const [step, setStep] = useState(1);
	const [questIsOpen, setQuestIsOpen] = useState(false);
	const steps = 10;

	const nextStep = () => {
		setStep(value => (value >= steps ? steps : value + 1));
	};
	const prevStep = () => {
		setStep(value => (value <= 1 ? 1 : value - 1));
	};

	const [communityHovered, setCommunityHovered] = useState(false);
	const questRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!document) return;

		if (questIsOpen && windowSize.width < 768) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [questIsOpen, windowSize]);

	useEffect(() => {
		const closeModal = () => {
			setQuestIsOpen(false);
		};

		const eskEvent = (e: globalThis.KeyboardEvent) => {
			if (e.code === 'Escape') {
				setQuestIsOpen(false);
			}
		};

		const questMove = () => {
			console.log('work');
			if (!questRef?.current?.clientHeight || window.innerWidth < 768) return;

			console.log(questRef?.current?.clientHeight);
			console.log(window.innerHeight);

			if (questRef?.current?.clientHeight > window.innerHeight) {
				questRef.current.style.top =
					-questRef?.current?.clientHeight + window.innerHeight - 10 + 'px';
			} else {
				questRef.current.style.top = '110px';
			}
		};

		window.addEventListener('resize', closeModal);
		window.addEventListener('resize', questMove);
		window.addEventListener('scroll', questMove);
		window.addEventListener('keyup', eskEvent);

		return () => {
			window.removeEventListener('resize', closeModal);
			window.removeEventListener('keyup', eskEvent);
		};
	}, []);

	const copyLink = (e: any) => {
		e.stopPropagation();
		navigator.clipboard.writeText('копирование с реф ссылкой').then(() => {
			Store.addNotification({
				insert: 'top',
				title: 'Copied',
				container: 'top-right',
				content: SuccessNotification,
				animationIn: ['animate__animated animate__bounceInRight'],
				animationOut: [''],
				dismiss: {
					duration: 5000,
					click: false,
				},
			});
		});
	};

	return (
		<>
			<div className={`container `}>
				<div className='flex relative gap-6 pt-6 pb-[62px] max-pc:pb-[42px]'>
					<div
						ref={ref => {
							if (ref) questRef.current = ref;
						}}
						className={`w-full max-w-[856px]  md:sticky  md:h-fit top-[50px] max-md:opacity-0 max-md:-z-10 max-md:fixed max-md:left-0 
							 max-md:bottom-0  max-md:top-0 max-md:bg-bg max-md:overflow-auto
							${
								questIsOpen &&
								windowSize.width < 768 &&
								'!flex max-md:opacity-100 flex-col overflow-y-auto max-md:!z-[2000] !top-0'
							}`}
					>
						<div className='max-md:!overflow-auto '>
							{questIsOpen && windowSize.width < 768 && (
								<div className=' py-2 border-b border-border'>
									<div className='container flex justify-between items-center'>
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
								min-h-[728px] rounded-[32px] px-[82px] py-[80px] justify-center
						 		items-center text-center max-pc:p-6 overflow-hidden
								max-md:top-0 max-md:bg-transparent  max-pc:pt-[87.5px] max-lg:pt-[24px]
								${questIsOpen && windowSize.width < 768 && 'container'}
							`}
							>
								<Image
									src={'/images/stars.png'}
									alt='stars'
									fill
									className='!left-0 !right-0 !top-0 !bottom-auto m-auto !h-fit object-contain absolute'
								/>
								<div className='max-lg:w-full'>
									<div className='flex items-center max-lg:flex-col'>
										<div className='pr-[52px] border-r border-absolute/100 border-opacity-15 max-lg:pr-0 max-lg:border-none'>
											<div className='relative w-[200px] h-[200px]'>
												<PolygonImage className='absolute inset-0 object-cover w-full h-full' />
												<CupIcon className='w-[62px] h-[62px] absolute z-10 inset-0 m-auto' />
											</div>
										</div>
										<div className='pl-6  max-lg:pl-0 max-lg:mt-2'>
											<H1 className='text-4xl mb-6'>Reward</H1>
											<div className='max-lg:flex max-lg:flex-col max-lg:items-center '>
												<div className='flex gap-2 bg-absolute/100 bg-opacity-[0.07] p-[6px] pr-4 items-center rounded-[100px] w-fit'>
													<CoinIcon /> <span>Blockchain</span>
												</div>
												<div className='py-[6px] px-4 !rounded-[100px] text-sm font-semibold mt-2 bg-green/400'>
													Default address
												</div>
											</div>
										</div>
									</div>
									<ul className='mt-8 flex flex-col max-md:pb-0 max-lg:pb-5 gap-2 max-lg:w-full max-lg:[&>li]:w-full'>
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
						items-center max-pc:grid max-pc:grid-cols-2 
						max-pc:grid-rows-2 max-pc:gap-0  max-pc:mt-0
						max-pc:auto-rows-min max-md:mt-auto max-md:pb-3 ${
							questIsOpen && windowSize.width < 768 && 'container'
						}`}
							>
								<Button
									buttonStyle='gray'
									onClick={prevStep}
									className='  flex items-center !py-[12px] gap-2 !max-w-[175px] w-full max-pc:!max-w-[120px] max-pc:row-start-2'
								>
									<ArrowIcon className='w-6 h-6' />
									<span className='text-base'>Prev</span>
								</Button>
								<div className='flex w-full gap-2 max-pc:col-span-2'>
									{Array.from(Array(steps).keys()).map(index => (
										<span
											className={`h-2 w-full block bg-absolute/100 opacity-[0.07] rounded-[50px] ${
												step > index && 'bg-blue/400 !opacity-100'
											}`}
										/>
									))}
								</div>
								<div className='flex gap-2 !max-w-[175px] w-full justify-end max-pc:row-start-2 ml-auto'>
									<Button
										buttonStyle='gray'
										onClick={nextStep}
										className='!bg-absolute/100 !bg-opacity-[0.07] !py-[12px] flex items-center gap-2 !max-w-[70px] w-full'
									>
										<span className='text-base'>Skip</span>
									</Button>
									<Button
										buttonStyle='purple'
										onClick={nextStep}
										className='flex items-center text-base !px-[10px] !py-[12px] !pl-[18px] gap-2 !max-w-[175px] w-full max-pc:!max-w-[120px]'
									>
										Next
										<ArrowIcon className='rotate-180 min-w-6 h-6' />
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className=' w-full max-w-[416px] max-pc:max-w-[388px] max-lg:max-w-[276px] max-md:max-w-none'>
						<div className='flex gap-4 items-start'>
							<H2 className='max-lg:text-2xl'>Subterra Ordinals 50 Whitelisting Giveaway</H2>
							<LikeButton className='min-w-[40px] min-h-[40px] [&>svg]:w-5 [&>svg]:h-w-5 rounded-xl' />
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
							<Link
								onMouseEnter={() => setCommunityHovered(true)}
								onMouseLeave={() => setCommunityHovered(false)}
								href={'/'}
								className={`bg-absolute/800 p-3 rounded-t-xl flex gap-4 items-center relative duration-500 ${
									communityHovered ? '!bg-absolute/700' : ''
								}`}
							>
								<div className='relative rounded-xl overflow-hidden'>
									<Image
										src={'/images/avatar.jpg'}
										alt='avatar'
										width={76}
										height={76}
										quality={100}
										className='w-[76px] h-[76px] object-cover object-center '
									/>
								</div>
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
							</Link>
							<div className='pt-3 p-4 bg-absolute/700 rounded-b-xl flex justify-between'>
								<Participants
									text='126K'
									className='!mt-0 items-center'
									avatars={{ className: '!border-absolute/700 !w-[40px] !h-[40px]' }}
									topLabel={{ className: 'text-xs font-medium' }}
									bottomLabel={{ className: 'text-sm' }}
									lastAvatarName='!-ml-[20px]'
								/>
								<Button
									buttonStyle='gray'
									className='flex gap-2 !p-[10px] !pl-[14px]'
								>
									<span className='font-semibold text-sm'>Follow</span>
									<PlusCircle />
								</Button>
							</div>
						</div>

						<ul className='mt-6 flex flex-col gap-2'>
							<button className='flex items-center bg-absolute/800 pr-[12px] overflow-hidden rounded-2xl font-semibold'>
								<span className='flex justify-center items-center py-[14px] mr-3 bg-blue/400 min-w-[52px]'>
									1
								</span>
								<span className='font-semibold text-base truncate block w-fit mr-3'>
									Short description Short description Short description
								</span>
								<span className='ml-auto min-w-[24px] h-[24px] flex justify-center items-center rounded-full'>
									<CheckedIconCircle bgColor={'#00AF3C'} />
								</span>
							</button>
							<button className='flex items-center bg-absolute/700 pr-[12px] overflow-hidden rounded-2xl font-semibold'>
								<span className='flex justify-center items-center py-[14px] mr-3 bg-absolute/700 min-w-[52px]'>
									2
								</span>
								<span className='font-semibold text-base truncate block w-fit mr-3'>
									Short description
								</span>
								<span className='font-semibold text-sm opacity-15 ml-auto block'>Optional</span>
							</button>
							<button className='flex cursor-not-allowed items-center bg-absolute/800 pr-[12px] overflow-hidden rounded-2xl font-semibold'>
								<span className='flex justify-center items-center py-[14px] mr-3 bg-absolute/700 min-w-[52px]'>
									2
								</span>
								<span className='font-semibold text-base truncate block w-fit mr-3'>
									Short description
								</span>
								<span className='font-semibold text-sm opacity-15 ml-auto flex items-center gap-2'>
									Optional
									<KeyIcon className='[&>path]:fill-absolute/100' />
								</span>
							</button>
						</ul>

						<div className='mt-2 bg-gradient-to-b from-[#41118e] to-[#3a005e] h-[140px] overflow-hidden rounded-2xl flex justify-center items-center relative'>
							<Image
								alt='stars'
								src={'/images/starsPurple.png'}
								width={366}
								height={72}
								quality={100}
								className='w-full bottom-auto absolute -top-[40px] max-lg:-top-[30px] max-md:-top-[34px] max-md:-right-[30px] object-contain'
							/>

							<div className='flex justify-center flex-col gap-3'>
								<span className='text-center font-medium text-sm opacity-50'>Rewards</span>
								<div className='flex gap-3 items-center flex-wrap justify-center'>
									<PolygonImage className='w-6 h-6' />
									<NftIcon className='w-6 h-6' />
									<span className='w-[1px] h-4 bg-blue/400' />
									<span className='flex gap-1 items-center'>
										<span className='font-semibold text-sm text-nowrap'>30 ETH</span>
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
								<Avatars className='!w-[46px] !h-[46px] border-bg ' />
								<span className='font-semibold text-base'>46К / 500К</span>
							</div>
						</div>

						<span className='mt-6 block font-semibold'>Refer friends and earn rewards</span>
						<P className='mt-3'>
							Share this Quest with your friends and earn for every completion.
						</P>

						<div className='flex gap-2 mt-3 max-lg:flex-col max-md:flex-row'>
							<Button
								buttonStyle='purple'
								className='w-full flex items-center gap-2 py-[14px]'
								href='https://telegram.me/share/url?url=<URL>&text=<TEXT>'
							>
								<TelegramIcon />
								<span>Share to TG</span>
							</Button>
							{/* <Button
								onClick={copyLink}
								buttonStyle='gray'
								className='w-full flex items-center gap-2 py-[14px]'
							>
								
							</Button> */}
							<CopyButton
								className='w-full flex items-center gap-2 py-[14px] !!p-0 !!px-0 !rounded-xl [&>span]:opacity-100'
								text={
									<div className='flex items-center gap-2'>
										<CopyIcon />
										<span>Copy link</span>
									</div>
								}
								iconClassName='pointer-events-none !p-0 [&>svg]:w-6 [&>svg]:h-6'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden container sticky left-0 max-md:flex justify-center right-0 bottom-0 p-3 bg-bg bg-opacity-80  z-10 '>
				<Button
					buttonStyle='purple'
					onClick={() => setQuestIsOpen(true)}
					className=' !bg-blue/400  !py-3 !bg-opacity-100 font-semibold  w-full flex items-center gap-2'
				>
					<span className='text-base'>Start Quest </span>
					<ArrowIcon className='rotate-180 w-6 h-6' />
				</Button>
			</div>
		</>
	);
};
