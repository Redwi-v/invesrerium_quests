import {FC} from 'react';
import {Button} from '@/shared/ui-kit';
import {MobileMenu} from './menu/mobile-menu';

interface NotConnectedHeaderContentProps {
    setUser: (val: boolean) => void;
}

const NotConnectedHeaderContent: FC<NotConnectedHeaderContentProps> = ({setUser}) => {
    return (
        <div className='flex'>
            <Button
                color='purple'
                adaptive={true}
                className='!font-semibold'
                onClick={() => setUser(true)}
            >
                Connect Wallet
            </Button>
            <MobileMenu/>
        </div>
    );
};

export default NotConnectedHeaderContent;
