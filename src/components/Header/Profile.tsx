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

            <Avatar size='md' name='Maurilio Lucena' src='https://static.quizur.com/i/b/5a6f790a1d6663.061271855a6f790a06c6e4.86019722.jpg' />
        </Flex>
    );
}