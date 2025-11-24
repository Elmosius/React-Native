import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>

      <Link href={'/'} style={styles.link}>
        Back Home
      </Link>
    </View>
  );
};

export default About;

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
  link: {
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
});
