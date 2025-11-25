// rnfes -> untuk template react native
import { Image, StyleSheet } from 'react-native';
import Logo from '../assets/logo.png';
import Spacer from '../components/Spacer';
import ThemedCard from '../components/ThemedCard';
import ThemedLink from '../components/ThemedLink';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <ThemedText style={styles.title} title={true}>
        Home React Native
      </ThemedText>
      <Spacer height={10} />

      <ThemedText>Reading List App</ThemedText>

      <Spacer />

      <ThemedCard>
        <ThemedText>Haii, ini sebuah Card</ThemedText>
      </ThemedCard>

      <Spacer />

      <ThemedLink href={'/login'}>
        <ThemedText>Go to Login Page</ThemedText>
      </ThemedLink>

      <Spacer height={10} />

      <ThemedLink href={'/about'}>
        <ThemedText>Go to About Page</ThemedText>
      </ThemedLink>

      <ThemedLink style={styles.link} href={'/contact'}>
        <ThemedText>Go to Contact Page</ThemedText>
      </ThemedLink>
    </ThemedView>
  );
};

export default Home;

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
  logo: {
    width: 100,
    height: 100,
  },
  link: {
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
});
