import { StyleSheet, Text } from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedLink from '../../components/ThemedLink';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Register = () => {
  const handleSubmit = () => {
    console.log('Register button pressed');
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Register to your account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#ffffff' }}>Register</Text>
      </ThemedButton>

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
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});
