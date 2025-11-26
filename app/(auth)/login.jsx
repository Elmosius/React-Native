import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';
import { useUser } from '../../hooks/useUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useUser();

  const handleSubmit = () => {
    console.info(user);
    console.log('Login button pressed', email, password);
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
          <Text style={{ color: '#ffffff' }}>Login</Text>
        </ThemedButton>

        <ThemedLink href='/register'>
          <ThemedText style={{ textAlign: 'center' }}>Don't have an account? Register here.</ThemedText>
        </ThemedLink>
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
});
