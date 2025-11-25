import { StyleSheet } from 'react-native';

import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.title}>
        Profile
      </ThemedText>

      <ThemedText>This is the profile screen. You can display user information here.</ThemedText>
      <Spacer />

      <ThemedText>Your Email</ThemedText>
    </ThemedView>
  );
};

export default Profile;

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
});
