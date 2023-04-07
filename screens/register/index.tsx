import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Input, Center, Link, Text } from "native-base";
import { RootStackParamList } from "../../routes";
import { Formik } from "formik";
import * as  yup from "yup"
import axios from "axios";

type Props = NativeStackScreenProps<RootStackParamList>;



export const Register = ({ navigation }: Props) => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


    const LoginSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').min(8).max(40).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
            'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial.'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), ""], 'As senhas tem que ser igual!')
            .required('Requerido'),
    });






    //AXIOS**************************************************//
    const createUser = async () => {
        try {
            const create = await axios.post('http://10.0.2.2:3000/register', {
                name: "fransssssssssssssssssssssssssssss",
                email: "frangggggggggggggj7@gmail",
                password: "123456789",
                confirmPassword: "123456789"
            })
        } catch (error) {

        }
    }









    return (
        <Center flex={1} px="3">
            <Text>Registar-se</Text>

            <Formik
                validationSchema={LoginSchema}
                initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >

                {({ handleChange, handleSubmit, values, errors }) => (
                    <Box alignItems="center">
                        <Input w="80%" mx="3" type="text" placeholder="Digite seu nome completo.." onChangeText={handleChange('name')} value={values.name} />
                        {errors.name && <Text>{errors.name}</Text>}

                        <Input w="80%" mx="3" type="email" placeholder="Endereço email.." onChangeText={handleChange('email')} value={values.email} />
                        {errors.email && <Text>{errors.email}</Text>}

                        <Input w="80%" mx="3" type="password" placeholder="Senha.." onChangeText={handleChange('password')} value={values.password} />
                        {errors.password && <Text>{errors.password}</Text>}

                        <Input w="80%" mx="3" type="password" placeholder="Confirmar senha.." onChangeText={handleChange('confirmPassword')} value={values.confirmPassword} />
                        {errors.confirmPassword && <Text>{errors.confirmPassword}</Text>}

                        <Button onPress={() => { handleSubmit() }}>Cadastrar</Button>
                    </Box>
                )}
            </Formik>
            <Link onPress={() => navigation.navigate('Login')}
                isExternal _text={{
                    color: "blue.400"
                }} mt={-0.5} _web={{
                    mb: -2
                }}
            >
                Já tem uma conta?
            </Link>
        </Center>
    );
}



