import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface RewardPopupState {
	isOpen: boolean;
	setOpen: (value: boolean) => void;
}

export const useRewardPopupStore = create<RewardPopupState>()(set => ({
	isOpen: false,
	setOpen: value => set(state => ({ isOpen: value })),
}));
