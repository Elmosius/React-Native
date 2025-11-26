import { StyleSheet } from 'react-native';

import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import { useUser } from '../../hooks/useUser';

const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView safe style={styles.container}>
      <ThemedText title style={styles.title}>
        Profile
      </ThemedText>
      <ThemedText>This is the profile screen. You can display user information here.</ThemedText>
      <Spacer />
      <ThemedText>{user?.email}</ThemedText>
      <ThemedButton onPress={logout}>
        <ThemedText style={{ color: '#ffffff' }}>Logout</ThemedText>
      </ThemedButton>
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
