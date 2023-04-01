import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Box, Input, Center, Link, Text } from "native-base";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList>;



export const ResetPassword = ({ navigation }: Props) => {
    return (
        <Center flex={1} px="3">
            <Text></Text>
            <Box alignItems="center">
                <Input mx="3" placeholder="Digite o email da conta.." w="80%" />
            </Box>

            <Box alignItems="center">
                <Button onPress={() => navigation.navigate('Home')}>Redefinir senha</Button>
            </Box>
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



