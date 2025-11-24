// rnfes -> untuk template react native
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/logo.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Text style={([styles.title], { color: 'red' })}>Home React Native</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Haii, ini sebuah Card</Text>
      </View>
    </View>
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
  card: {
    backgroundColor: '#eee',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 12,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
