import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constans/colors';

const ThemedButton = ({ style, ...props }) => {
  return <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]} {...props} />;
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
  btnPressed: {
    opacity: 0.8,
  },
});
