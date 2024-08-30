'use client';
import { QuestCard } from '@/entities/quest';
import { useWindowSize } from '@/shared/hooks';
import {
	ChartIcon,
	ChartIconDown,
	CheckedIcon,
	CheckedIconCircle,
	CoinIcon,
	CrossIcon,
	NetIcon,
	SearchIcon,
	SpinnerIcon,
	XpIcon,
} from '@/shared/images';
import { Button, Checkbox, H2, Input, P } from '@/shared/ui-kit';
import { CheckmarksAccordionSelect } from '@/shared/ui-kit/checkmarks-accordion-select';
import { SelectMenu } from '@/shared/ui-kit/select-menu/ui/select-menu';
import { FC, PropsWithChildren, ReactElement, useEffect, useState } from 'react';
interface IQuestsPageViewProps {}

export const QuestsPageView: FC<IQuestsPageViewProps> = props => {
	const {} = props;

	const [stateReward, setStateReward] = useState({
		xpCheckbox: false,
		tokenCheckbox: false,
		nftCheckbox: false,
	});

	const [filtersIsOpen, setFiltersIsOpen] = useState(false);
	const windowSizes = useWindowSize();

	const [stateDifficulty, setStateDifficulty] = useState({
		beginer: false,
		intermediante: false,
		advanced: false,
	});

	useEffect(() => {
		const closeModal = () => {
			setFiltersIsOpen(false);
		};

		const eskEvent = (e: globalThis.KeyboardEvent) => {
			if (e.code === 'Escape') {
				setFiltersIsOpen(false);
			}
		};

		window.addEventListener('resize', closeModal);
		window.addEventListener('keyup', eskEvent);

		return () => {
			window.removeEventListener('resize', closeModal);
			window.removeEventListener('keyup', eskEvent);
		};
	}, []);

	const clearBooleanState = (object1: { [key: string]: boolean }) => {
		const object: any = {};
		for (const [key, value] of Object.entries(object1)) {
			object[key] = false;
		}

		return { ...object };
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, state: any, setState: any) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	const { xpCheckbox, tokenCheckbox, nftCheckbox } = stateReward;

	return (
		<div className='container'>
			<div className='pt-[42px]'>
				<div className='flex justify-between max-md:flex-wrap'>
					<H2 className='max-md:w-full max-md:mb-[26px]'>Quests</H2>
					<div className='flex gap-4 items-center max-md:w-full max-md:!grid max-md:grid-cols-2 '>
						<Input
							containerClassName='max-md:min-w-[167.5px]'
							icon={<SearchIcon />}
							inputParas={{ placeholder: 'Search' }}
						/>
						<SelectMenu
							classes={{ formControl: 'max-md:min-w-0 max-md:w-full' }}
							className='max-md:w-full max-md:min-w-0'
							items={[
								({ isActive }) => (
									<ListItem
										isActive={isActive}
										icon={<ChartIcon isActive={isActive} />}
										text='Created'
									/>
								),
								({ isActive }) => (
									<ListItem
										isActive={isActive}
										icon={<ChartIconDown isActive={isActive} />}
										text='Created'
									/>
								),
								({ isActive }) => (
									<ListItem
										isActive={isActive}
										icon={<ChartIcon isActive={isActive} />}
										text='Expiring'
									/>
								),
								({ isActive }) => (
									<ListItem
										isActive={isActive}
										icon={<ChartIconDown isActive={isActive} />}
										text='Expiring'
									/>
								),
								({ isActive }) => (
									<ListItem
										isActive={isActive}
										icon={<ChartIcon isActive={isActive} />}
										text='Popular'
									/>
								),
								({ isActive }) => (
									<ListItem
										isActive={isActive}
										icon={<ChartIconDown isActive={isActive} />}
										text='Popular'
									/>
								),
							]}
						/>
					</div>
				</div>
				<div className='flex gap-6 mt-6 pb-[62px] max-pc:flex-col max-lg:mt-4'>
					{((windowSizes.width < 768 && filtersIsOpen) || windowSizes.width >= 768) && (
						<div
							className={`min-w-[306px] 
                flex flex-col gap-4 max-pc:grid 
                max-pc:grid-cols-3 max-pc:w-full 
                max-md:fixed max-md:left-0 max-md:right-0 
                max-md:top-0 max-md:bottom-0 max-md:z-[1200] max-md:bg-bg max-md:!flex-col max-md:!flex
								max-md:overflow-auto max-md:pb-8
                ${windowSizes.width < 768 && 'px-3'}`}
						>
							<div className='hidden max-md:flex justify-between pt-3 mb-2 items-center'>
								<H2>Filter</H2>
								<button
									onClick={() => setFiltersIsOpen(false)}
									className='bg-tone/200 p-[10px] rounded-xl'
								>
									<CrossIcon className='w-5 h-5' />
								</button>
							</div>
							<CheckmarksAccordionSelect
								mainLabel={'Reward'}
								clearState={() => setStateReward(clearBooleanState(stateReward))}
								setChecked={e => handleChange(e, stateReward, setStateReward)}
								items={[
									{
										icon: <XpIcon className='w-6 h-6' />,
										label: 'XP',
										checked: xpCheckbox,
										name: 'xpCheckbox',
									},
									{
										icon: <CoinIcon className='w-6 h-6' />,
										label: 'Token',
										checked: tokenCheckbox,
										name: 'tokenCheckbox',
									},
									{
										icon: <div className='w-6 h-6 rounded-full bg-green/400' />,
										label: 'NFT',
										checked: nftCheckbox,
										name: 'nftCheckbox',
									},
								]}
							/>
							<CheckmarksAccordionSelect
								mainLabel={'Difficulty'}
								clearState={() => setStateDifficulty(clearBooleanState(stateDifficulty))}
								setChecked={e => handleChange(e, stateDifficulty, setStateDifficulty)}
								items={[
									{
										icon: (
											<NetIcon
												signal={1}
												className='w-6 h-6'
											/>
										),
										label: 'Beginer',
										checked: stateDifficulty.beginer,
										name: 'beginer',
									},
									{
										icon: (
											<NetIcon
												signal={2}
												className='w-6 h-6'
											/>
										),
										label: 'Intermediante',
										checked: stateDifficulty.intermediante,
										name: 'intermediante',
									},
									{
										icon: (
											<NetIcon
												signal={3}
												className='w-6 h-6'
											/>
										),
										label: 'Advanced',
										checked: stateDifficulty.advanced,
										name: 'advanced',
									},
								]}
							/>
							<Checkbox
								label='Completed'
								value='Completed'
							/>
						</div>
					)}
					{windowSizes.width < 768 && (
						<Button
							buttonStyle='purple'
							onClick={() => setFiltersIsOpen(value => !value)}
							className=''
						>
							Filters
						</Button>
					)}
					<div className='w-full'>
						<ul className='grid w-full grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:gap-3'>
							{Array.from(Array(9).keys()).map(index => {
								return (
									<QuestCard
										className='!pl-0'
										title={'Celosphere Summer: Mint “Ego” by Mad in Pixel' + index.toString()}
									/>
								);
							})}
						</ul>
						{/* <NothingFind /> */}
						<SpinnerIcon className='mt-[42px] block mx-auto animate-spin' />
					</div>
				</div>
			</div>
		</div>
	);
};

const NothingFind = () => {
	return (
		<div className='bg-gradient-to-b from-[#282828] rounded-3xl  min-h-[356px]'>
			<div className='flex flex-col items-center pt-[42px]'>
				<SearchIcon className='w-[42px] h-[42px] [&>path]:stroke-[#717171]' />
				<P className='!font-bold !text-3xl mt-3 !leading-10 !text-absolute/100'>Nothing found</P>
				<P className='mt-1 !text-center'>Try changing the filter and repeating the search.</P>
			</div>
		</div>
	);
};

const ListItem: FC<{ isActive: boolean; icon: ReactElement; text: string }> = ({
	isActive,
	text,
	icon,
}) => {
	return (
		<div className='flex items-center gap-2 px-3 py-[10px] w-full'>
			{icon}
			<span className='font-semibold text-base text-absolute/100'>{text}</span>
			{isActive && (
				<CheckedIconCircle className='ml-auto check' />
			)}
		</div>
	);
};
