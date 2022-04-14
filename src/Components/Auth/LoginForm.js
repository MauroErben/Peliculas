import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { getAutheticationToken, createSessionToken, authenticateUser } from "../Services/auth";
import { useNavigate, Navigate } from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate();
    const token = sessionStorage.getItem('session_id');

    return (
        <>
            {token && <Navigate replace to='/'/>}
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Este campo es requerido.';
                    }
                    if (!values.password) {
                        errors.password = 'Este campo es requerido.';
                    }
                    return errors;
                }}
                onSubmit={async (values) => {
                    try {
                        const { request_token } = await getAutheticationToken();
                        values.request_token = request_token;
                        const session = await createSessionToken(values);
                        const { session_id } = await authenticateUser({ 'request_token': session.request_token })
                        sessionStorage.setItem('session_id', session_id);
                        navigate('/');
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <Flex justifyContent='center' alignItems='center'>
                        <VStack
                            spacing={4}
                            padding='4'
                            boxShadow='lg'
                        >
                            <Heading size='lg'>Login</Heading>
                            <FormControl isInvalid={errors.username}>
                                <FormLabel>Usuario</FormLabel>
                                <Input
                                    name="username"
                                    value={values.username}
                                    type='text'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
                            </FormControl>
                            <FormControl isInvalid={errors.password}>
                                <FormLabel>Contraseña</FormLabel>
                                <Input
                                    name='password'
                                    value={values.password}
                                    type='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                            </FormControl>
                            <Button
                                bg='red.600'
                                _hover={{ bg: 'red.700' }}
                                color='white'
                                onClick={handleSubmit}
                            >
                                Iniciar sesion
                            </Button>
                        </VStack>
                    </Flex>
                )}
            </Formik>
        </>
    )
}
export default LoginForm;