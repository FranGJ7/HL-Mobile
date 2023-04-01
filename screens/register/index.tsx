import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Input, Center, Link, Text } from "native-base";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList>;


export const Register = ({ navigation }: Props) => {
    return (
        <Center flex={1} px="3">
            <Text>Registar-se</Text>
            <Box alignItems="center">
                <Input mx="3" placeholder="Digite seu nome completo.." w="80%" />
            </Box>
            <Box alignItems="center">
                <Input mx="3" placeholder="Endereço email.." w="80%" />
            </Box>
            <Box alignItems="center">
                <Input mx="3" placeholder="Senha.." w="80%" />
            </Box>
            <Box alignItems="center">
                <Input mx="3" placeholder="Confirmar senha.." w="80%" />
            </Box>
            <Box alignItems="center">
                <Button onPress={() => navigation.navigate('Home')}>Cadastrar</Button>
            </Box>
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



