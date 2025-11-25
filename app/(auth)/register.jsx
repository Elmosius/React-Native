import { StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Register to your account
      </ThemedText>
      <Spacer />

      <ThemedLink href='/login'>
        <ThemedText style={{ textAlign: 'center' }}>Already have an account? Login here.</ThemedText>
      </ThemedLink>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
