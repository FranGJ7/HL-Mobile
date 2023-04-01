import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Register, ResetPassword, Home } from './screens';

export type RootStackParamList = {
  Login: undefined
  Register: undefined
  ResetPassword: undefined
  Home:undefined

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
); 