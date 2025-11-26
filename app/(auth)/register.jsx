import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from '../../components/ThemedTextInput';
import ThemedView from '../../components/ThemedView';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Register button pressed');
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

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#ffffff' }}>Register</Text>
        </ThemedButton>

        <ThemedLink href='/login'>
          <ThemedText style={{ textAlign: 'center' }}>Already have an account? Login here.</ThemedText>
        </ThemedLink>
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
});
