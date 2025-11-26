import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import { useRouter } from 'expo-router';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedLoader from '../../components/ThemedLoader';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';
import { useUser } from '../../hooks/useUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { login } = useUser();

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await login({ email, password });
      router.replace('/books');
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safe style={styles.container}>
        <Spacer />
        <ThemedText title style={styles.title}>
          Login to your account
        </ThemedText>

        <ThemedTextInput value={email} onChangeText={setEmail} placeholder='Email' keyboardType='email-address' />

        <ThemedTextInput value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry />

        <ThemedButton onPress={handleSubmit}>
          {loading ? <ThemedLoader /> : <Text style={{ color: '#ffffff' }}>Login</Text>}
        </ThemedButton>

        <ThemedLink href='/register'>
          <ThemedText style={{ textAlign: 'center' }}>Don't have an account? Register here.</ThemedText>
        </ThemedLink>

        {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  errorText: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
});
