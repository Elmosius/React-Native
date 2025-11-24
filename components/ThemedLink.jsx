import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

const ThemedLink = ({ href, ...props }) => {
  return <Link href={href} style={styles.link} {...props} />;
};

export default ThemedLink;

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
});
