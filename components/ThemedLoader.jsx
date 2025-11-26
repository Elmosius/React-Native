import { ActivityIndicator, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constans/colors';

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ? Colors.dark : Colors.light;

  return <ActivityIndicator size='small' color={theme.text} />;
};

export default ThemedLoader;

const styles = StyleSheet.create({});
