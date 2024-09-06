'use client';
import FullPageSlider from '@/widgets/full-page-slider/ui/full-page-slider';
import {ListSlider} from '@/widgets/list-slider';
import {FC} from 'react';
import {Separator} from "@/shared/ui-kit/separator/ui/separator";

interface MainPageViewProps {
}

export const MainPageView: FC<MainPageViewProps> = () => {
    return (
        <>
            <FullPageSlider/>
            <ListSlider mainTitle='In progress'/>
            <div className='mb-16 max-lg:mb-10'>
                <Separator/>
            </div>
            <ListSlider mainTitle='New Quests' className='!mb-0'/>
        </>
    );
};
