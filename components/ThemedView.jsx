import { useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constans/colors';

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: safe && insets.top,
          paddingBottom: safe && insets.bottom,
          paddingLeft: safe && insets.left,
          paddingRight: safe && insets.right,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
