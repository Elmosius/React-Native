import { StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Login to your account
      </ThemedText>
      <Spacer />

      <ThemedLink href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>Don't have an account? Register here.</ThemedText>
      </ThemedLink>
    </ThemedView>
  );
};

export default Login;

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
