'use client';
import {FC, useState} from 'react';
import ConnectedHeaderContent from './connected';
import NotConnectedHeaderContent from './not-connected';
import LeftSide from './left-side';
import UserStats from "@/widgets/user-stats/ui/user-stats";
import GmPopup from "@/widgets/reward-popup/ui/gm-popup";
import {useRewardPopupStore} from "@/widgets/reward-popup";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    const [user, setUser] = useState(false);
    const {isOpen} = useRewardPopupStore(state => state);

    return (
        <>
            <div
                className='bg-absolute/800 py-3.5 items-center flex max-md:py-[10px] fixed !top-0 !left-0 !ring-0 w-full min-h-[84px] max-md:min-h-[60px] z-[1000]'
                style={isOpen ? {paddingRight: '17px'} : {}}
            >
                <div className='container'>
                    <div className='flex justify-between items-center '>
                        <LeftSide/>

                        {user && <ConnectedHeaderContent/>}
                        {!user && <NotConnectedHeaderContent setUser={setUser}/>}
                    </div>
                </div>
            </div>

            {user && <GmPopup/>}
            {user && <UserStats/>}
        </>
    );
};
