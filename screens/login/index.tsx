import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Input, Center, Link, Text } from "native-base";
import { Formik } from 'formik';
import { RootStackParamList } from "../../routes";



type Props = NativeStackScreenProps<RootStackParamList>;



export const Login = ({ navigation }: Props) => {
    return (
        <Center flex={1} px="3">
            <Text>Login</Text>
            <Formik
                initialValues={{ 
                email: '',
                password: ""
            }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <Box>
                        <Input
                             mx="3" 
                            placeholder="Email" 
                            w="80%"
                            type="text"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
        
                       
                        <Input
                             mx="3" 
                            placeholder="Senha" 
                            w="80%"
                            type="password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                      
                        
                        <Button onPress={() => handleSubmit}>Entrar</Button>
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



