import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('O e-mail é obrigatório').email('O e-mail precisa ser um e-mail válido'),
  password: yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        onSubmit={handleSubmit(handleSignIn)}
        w='100%'
        maxWidth='360px'
        bgColor='gray.800'
        p='8'
        borderRadius='8'
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input
            id='email'
            name='email'
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />
          <Input
            id='password'
            name='password'
            type='password'
            label='Senha'
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
