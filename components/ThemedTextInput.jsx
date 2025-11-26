import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { Colors } from '../constans/colors';

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          borderColor: theme.border,
        },
        styles.textInput,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 5,
  },
});
