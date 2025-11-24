import { Slot, Stack } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constans/colors';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.navBackground,
        },
        headerTitleAlign: 'center',
        headerTintColor: theme.title,
      }}>
      <Stack.Screen name='index' options={{ headerShown: true }} />
      <Stack.Screen name='about' options={{ headerShown: true }} />
      <Stack.Screen name='contact' options={{ headerShown: true }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
