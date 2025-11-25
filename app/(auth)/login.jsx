import { StyleSheet, Text } from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Login = () => {
  const handleSubmit = () => {
    console.log('Login button pressed');
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Login to your account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#ffffff' }}>Login</Text>
      </ThemedButton>

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
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
