import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>
                        Maurilio Lucena
                    </Text>
                    <Text color='gray.300' fontSize='small'>
                        maurilioz1@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size='md' name='Maurilio Lucena' src='https://scontent.ffor11-1.fna.fbcdn.net/v/t1.6435-9/122118586_3893868010642941_7668475484093719835_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PaZa3plXC3kAX_hpehr&_nc_ht=scontent.ffor11-1.fna&oh=00_AT9s1DM4V0v3wOM-46342BVpis0mZs0TVTcr5bbs0dr3CQ&oe=62046E48' />
        </Flex>
    );
}