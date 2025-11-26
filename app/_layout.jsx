import { Stack } from 'expo-router';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constans/colors';
import UserProvider from '../context/UserContext';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTitleAlign: 'center',
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name='index' options={{ headerShown: true }} />
        <Stack.Screen name='about' options={{ headerShown: true }} />
        <Stack.Screen name='contact' options={{ headerShown: true }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
