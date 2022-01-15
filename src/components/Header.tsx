import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header() {
    return (
        <Flex as='header' w='100%' h='20' maxWidth='1480px' mx='auto' mt='4' align='center' px='6'>
            <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
                dashgo
                <Text as='span' color='pink.500' ml='1'>.</Text>
            </Text>

            <Flex as='label' flex='1' py='4' px='8' ml='6' maxWidth='400px' alignSelf='center' color='green.200' position='relative' bg='gray.800' borderRadius='full'>
                <Input color='gray.50' variant='unstyled' placeholder='Buscar na plataforma' px='4' mr='4' _placeholder={{ color: 'gray.400' }} />
                <Icon as={RiSearchLine} fontSize='20px' color='pink.500' />
            </Flex>

            <Flex align='center' ml='auto'>
                <HStack spacing='8' mx='8' pr='8' py='1' color='gray.300' borderRightWidth='1px' borderColor='gray.700'>
                    <Icon as={RiNotificationLine} fontSize='20px' />
                    <Icon as={RiUserAddLine} fontSize='20px' />
                </HStack>

                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>
                            Maurilio Lucena
                        </Text>
                        <Text color='gray.300' fontSize='small'>
                            maurilioz1@hotmail.com
                        </Text>
                    </Box>

                    <Avatar size='md' name='Maurilio Lucena' src='https://scontent.ffor11-1.fna.fbcdn.net/v/t1.6435-9/122118586_3893868010642941_7668475484093719835_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PaZa3plXC3kAX_hpehr&_nc_ht=scontent.ffor11-1.fna&oh=00_AT9s1DM4V0v3wOM-46342BVpis0mZs0TVTcr5bbs0dr3CQ&oe=62046E48' />
                </Flex>
            </Flex>
        </Flex>
    );
}