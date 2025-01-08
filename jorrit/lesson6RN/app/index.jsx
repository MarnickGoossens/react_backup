import WelcomeScreen from '@/components/WelcomeScreen';
import HomeScreen from '@/components/HomeScreen';
import SignInScreen from '@/components/SignInScreen';
import SignUpScreen from '@/components/SignUpScreen';

import { createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: 'darkturquoise',
  },
  darkColors: {
    primary: '#000',
  },
});

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import '@/config/firebase';
import { useAuthentication } from '@/hooks/use_authentication';

export default function Index() {
  const { user } = useAuthentication();
  return (
    <ThemeProvider theme={theme}>
      { user ? 
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
      :
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
    }
    </ThemeProvider>
  );
}