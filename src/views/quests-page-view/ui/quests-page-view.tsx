'use client';
import { QuestCard } from '@/entities/quest';
import { useWindowSize } from '@/shared/hooks';
import {
	BurgerMenu,
	ChartIcon,
	ChartIconDown,
	CoinIcon,
	CrossIcon,
	NetIcon,
	SearchIcon,
	SpinnerIcon,
	XpIcon,
} from '@/shared/images';
import { Button, Checkbox, H2, Input } from '@/shared/ui-kit';
import { CheckmarksAccordionSelect } from '@/shared/ui-kit/checkmarks-accordion-select';
import { SelectMenu } from '@/shared/ui-kit/select-menu/ui/select-menu';
import { FC, PropsWithChildren, ReactElement, useState } from 'react';
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

	console.log(filtersIsOpen);

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
		<div className='custom-container'>
			<div className='pt-[42px]'>
				<div className='flex justify-between max-md-xs:flex-wrap'>
					<H2 className='max-md-xs:w-full max-md-xs:mb-[26px]'>Quests</H2>
					<div className='flex gap-4 items-center max-md-xs:w-full max-md-xs:!grid max-md-xs:grid-cols-2 '>
						<Input
							containerClassName='max-md-xs:!min-w-min '
							icon={<SearchIcon />}
							inputParas={{ placeholder: 'Search' }}
						/>
						<SelectMenu
							classes={{ formControl: 'max-md-xs:min-w-0 max-md-xs:w-full' }}
							className='max-md-xs:w-full max-md-xs:min-w-0'
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
				<div className='flex gap-6 mt-6 pb-[62px] max-[1200px]:flex-col max-md-xs:mt-4'>
					{((windowSizes.width < 670 && filtersIsOpen) || windowSizes.width > 670) && (
						<div
							className={`w-[306px] 
                flex flex-col gap-4 max-[1200px]:grid 
                max-[1200px]:grid-cols-3 max-[1200px]:w-full 
                max-md-xs:fixed max-md-xs:left-0 max-[620px]:right-0 
                max-md-xs:top-0 max-md-xs:bottom-0 max-md-xs:z-30 max-md-xs:bg-bg max-md-xs:!flex-col max-md-xs:!flex
                ${windowSizes.width < 670 && 'custom-container'}`}
						>
							<div className='hidden max-md-xs:flex justify-between pt-3 mb-2 items-center'>
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
								mainLabel={'Reward'}
								clearState={() => setStateDifficulty(clearBooleanState(stateReward))}
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
					{windowSizes.width < 670 && (
						<Button
							onClick={() => setFiltersIsOpen(value => !value)}
							className=''
						>
							Filters
						</Button>
					)}
					<div className='w-full'>
						<ul className='grid w-full grid-cols-3 gap-6 max-[1000px]:grid-cols-2'>
							{Array.from(Array(9).keys()).map(index => {
								return (
									<QuestCard
										className='!pl-0'
										title={'Celosphere Summer: Mint “Ego” by Mad in Pixel' + index.toString()}
									/>
								);
							})}
						</ul>
						<SpinnerIcon className='mt-[42px] block mx-auto animate-spin' />
					</div>
				</div>
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
				<span className='check bloc ml-auto w-[20px] h-[20px] bg-absolute/100 rounded-full' />
			)}
		</div>
	);
};
