import { Slot, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5f6588ff',
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name='index' options={{ headerShown: true }} />
      <Stack.Screen name='about' options={{ headerShown: true }} />
      <Stack.Screen name='contact' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
