import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Input, Center, Link, Text } from "native-base";
import { RootStackParamList } from "../../routes";
import { Formik } from "formik";
import * as  yup from "yup"

type Props = NativeStackScreenProps<RootStackParamList>;



export const ResetPassword = ({ navigation }: Props) => {

    
    const initialValues = {
        email: ""
    }
    
    const LoginSchema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
    });


    return (
        <Center flex={1} px="3">
            <Text>Redefinir senha</Text>
                
            <Formik
             validationSchema={LoginSchema}
             initialValues={initialValues}
             onSubmit={values => console.log(values)}
            >
             
                {({ handleChange, handleSubmit, values, errors }) =>(
                <Box>
                <Input mx="3" w="80%" placeholder="Digite o email da conta.." type="email" value={values.email} onChangeText={handleChange('email')} />
                {errors.email && <Text>{errors.email}</Text>}
               
                <Button onPress={() => handleSubmit()}>Redefinir senha</Button>
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
                Ir para login
            </Link>
        </Center>
    );
}



