import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header/Index";
import { Sidebar } from "../../components/Sidebar/Index";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const creatUserFormSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().required('O e-mail é obrigatório').email('O e-mail precisa ser um e-mail válido'),
    password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password'),
    ], 'A confirmação de senha precisa ser igual a senha')
});

export default function UserCreate() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(creatUserFormSchema),
    });

    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values);
    }

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth='1480px' mx='auto' px='6'>
                <Sidebar />

                <Box
                    as='form'
                    onSubmit={handleSubmit(handleCreateUser)}
                    flex='1'
                    borderRadius='8'
                    bgColor='gray.800'
                    p={['6', '8']}
                >
                    <Heading size='lg' fontWeight='normal'>
                        Criar usuário
                    </Heading>

                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                name='name'
                                label='Nome completo'
                                error={errors.name}
                                {...register('name')}
                            />
                            <Input
                                name='email'
                                type='email'
                                label='E-mail'
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                name='password'
                                type='password'
                                label='Senha'
                                error={errors.password}
                                {...register('password')}
                            />
                            <Input
                                name='password_confirmation'
                                type='password'
                                label='Confirmação de senha'
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as="a" colorScheme='whiteAlpha'>
                                    Cancelar
                                </Button>
                            </Link>

                            <Button type="submit" colorScheme='pink' isLoading={formState.isSubmitting}>
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}