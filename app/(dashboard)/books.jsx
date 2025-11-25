import { StyleSheet } from 'react-native';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Books = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.title}>
        List Books
      </ThemedText>

      <ThemedText>This is the books screen. You can display a list of books here.</ThemedText>
    </ThemedView>
  );
};

export default Books;

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
