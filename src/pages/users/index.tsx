import { useEffect } from "react";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from 'next/link';
import { useQuery } from 'react-query';
import { Header } from "../../components/Header/Index";
import { Pagination } from "../../components/Pagination/Index";
import { Sidebar } from "../../components/Sidebar/Index";

type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

export default function UserList() {
    const { data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();

        const users = data.users.map((user: User) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }),
            }
        });

        return users;
    }, {
        staleTime: 1000 * 5,
    })

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
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                cursor='pointer'
                                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
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
                                    {data.map((user: User) => (
                                        <Tr key={user.id}>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme='pink' />
                                            </Td>
                                            <Td px={['4', '4', '6']}>
                                                <Box>
                                                    <Text fontWeight='bold'>{user.name}</Text>
                                                    <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                </Box>
                                            </Td>
                                            {isWideVersion && (
                                                <Td>{user.created_at}</Td>
                                            )}
                                            <Td>
                                                {isWideVersion && (
                                                    <Button
                                                        as='a'
                                                        size='sm'
                                                        fontSize='sm'
                                                        colorScheme='purple'
                                                        cursor='pointer'
                                                        leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                                    >
                                                        {isWideVersion ? 'Editar' : ''}
                                                    </Button>
                                                )}
                                            </Td>
                                        </Tr>

                                    ))}
                                </Tbody>
                            </Table>

                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}