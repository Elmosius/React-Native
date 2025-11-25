import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../constans/colors';

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return <View style={[styles.card, { backgroundColor: theme.background, borderColor: theme.border }, style]} {...props} />;
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 12,
  },
});
