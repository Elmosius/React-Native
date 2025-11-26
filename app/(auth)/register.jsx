import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useUser } from '../../hooks/useUser';

import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedLoading from '../../components/ThemedLoading';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register } = useUser();

  const handleSubmit = async () => {
    setError(null);

    try {
      await register({ email, password });
      router.replace('/books');
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setEmail('');
      setPassword('');
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title style={styles.title}>
          Register to your account
        </ThemedText>

        <Spacer />

        <ThemedTextInput value={email} onChangeText={setEmail} placeholder='Email' keyboardType='email-address' />
        <ThemedTextInput value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry />

        <ThemedButton onPress={handleSubmit}>{loading ? <ThemedLoading /> : <Text style={{ color: '#ffffff' }}>Register</Text>}</ThemedButton>

        <ThemedLink href='/login'>
          <ThemedText style={{ textAlign: 'center' }}>Already have an account? Login here.</ThemedText>
        </ThemedLink>
        {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
