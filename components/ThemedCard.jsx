import { StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from '../constans/colors';

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return <View style={[styles.card, { backgroundColor: theme.background }, style]} {...props} />;
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 12,
  },
});
