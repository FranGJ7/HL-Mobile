import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Input, Center, Link, Text } from "native-base";
import { Formik } from 'formik';
import axios from "axios"
import { RootStackParamList } from "../../routes";
import * as yup from 'yup';


type Props = NativeStackScreenProps<RootStackParamList>;




export const Login = ({ navigation }: Props) => {

    const initialValues = {
        email: "",
        password: ""
    }


    const LoginSchema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    });






  //AXIOS//////////////////////

    const loginUser = async () => {
        try {
            const login = await axios.post('http://10.0.2.2:3000/login', {
                email: "frangggggggggggggj7@gmail",
                password: "123456789",
            })
            const result = login.data
            console.log(result)
        } catch (error) {
           console.log("Deu ruim!")
        }
    }










    return (
        <Center flex={1} px="3">
            <Text>Login</Text>
            <Formik
                validationSchema={LoginSchema}
                initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <Box>
                        <Input
                            mx="3"
                            w="80%"
                            placeholder="Email"
                            type="text"
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        {errors.email && <Text>{errors.email}</Text>}
                        <Input
                            mx="3"
                            w="80%"
                            placeholder="Senha"
                            type="password"
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        {errors.password && <Text>{errors.password}</Text>}


                        <Link onPress={() => navigation.navigate('ResetPassword')}
                            isExternal _text={{
                                color: "blue.400"
                            }} mt={-0.5} _web={{
                                mb: -2
                            }}
                        >
                            Esqueceu sua senha?
                        </Link>

                        <Button onPress={() => loginUser()} >Entrar</Button>
                    </Box>
                )}
            </Formik>
           
            <Link onPress={() => navigation.navigate('Register')}
                isExternal _text={{
                    color: "blue.400"
                }} mt={-0.5} _web={{
                    mb: -2
                }}
            >
                Registrar-se
            </Link>

        </Center>
    );
}


