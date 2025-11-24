import { StyleSheet } from 'react-native';

import ThemedLink from '../components/ThemedLink';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About Page</ThemedText>

      <ThemedLink href={'/'}>
        <ThemedText>Go to Home Page</ThemedText>
      </ThemedLink>
    </ThemedView>
  );
};

export default About;

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
});
