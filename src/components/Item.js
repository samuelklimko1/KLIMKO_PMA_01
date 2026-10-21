import { Pressable, StyleSheet, Text } from 'react-native';

export default function Item({ title, done, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.taskContainer,
        { backgroundColor: done ? 'green' : 'red' },
      ]}
    >
      <Text style={styles.taskText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    borderRadius: 8,
    padding: 12,
    marginVertical: 4,
  },
  taskText: {
    color: '#fff',
  },
});