import { StyleSheet } from 'react-native';
import ThemedLink from '../components/ThemedLink';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>

      <ThemedLink href={'/'} style={styles.link}>
        <ThemedText>Go to Home Page</ThemedText>
      </ThemedLink>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  link: {
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
});
