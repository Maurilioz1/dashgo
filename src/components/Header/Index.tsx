import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Search } from './Search';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex as='header' w='100%' h='20' maxWidth='1480px' mx='auto' mt='4' align='center' px='6'>
            {!isWideVersion && (
                <IconButton icon={<Icon as={RiMenuLine} />} fontSize='24' variant='unstyled' onClick={onOpen} aria-label='Abrir navegação' mr='2' />
            )}

            <Logo />

            {isWideVersion && (
                <Search />
            )}

            <Flex align='center' ml='auto'>
                <Notifications />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}