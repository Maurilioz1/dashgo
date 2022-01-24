import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Index";
import { Pagination } from "../../components/Pagination/Index";
import { Sidebar } from "../../components/Sidebar/Index";
import Link from 'next/link';

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth='1480px' mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius='8' bgColor='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Link href='/users/create' passHref >
                            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' cursor='pointer' leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} w='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && (
                                    <Th>Data de cadastro</Th>
                                )}
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td px={['4', '4', '6']}>
                                    <Box>
                                        <Text fontWeight='bold'>Maurilio Lucena</Text>
                                        <Text fontSize='sm' color='gray.300'>maurilioz1@hotmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (
                                    <Td>16 de Janeiro de 2022</Td>
                                )}
                                <Td>
                                    {isWideVersion && (
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='purple' cursor='pointer' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                                            Editar
                                        </Button>
                                    )}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td px={['4', '4', '6']}>
                                    <Box>
                                        <Text fontWeight='bold'>Maurilio Lucena</Text>
                                        <Text fontSize='sm' color='gray.300'>maurilioz1@hotmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (
                                    <Td>16 de Janeiro de 2022</Td>
                                )}
                                <Td>
                                    {isWideVersion && (
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='purple' cursor='pointer' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                                            {isWideVersion ? 'Editar' : ''}
                                        </Button>
                                    )}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td px={['4', '4', '6']}>
                                    <Box>
                                        <Text fontWeight='bold'>Maurilio Lucena</Text>
                                        <Text fontSize='sm' color='gray.300'>maurilioz1@hotmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (
                                    <Td>16 de Janeiro de 2022</Td>
                                )}
                                <Td>
                                    {isWideVersion && (
                                        <Button as='a' size='sm' fontSize='sm' colorScheme='purple' cursor='pointer' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                                            {isWideVersion ? 'Editar' : ''}
                                        </Button>
                                    )}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}