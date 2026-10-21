import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import Item from './src/components/Item';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  function addHandler() {
    if (inputText.trim() === '') {
      return;
    }

    const task = {
      id: taskList.length + 1,
      title: inputText,
      done: false,
    };

    setTaskList([...taskList, task]);
    setInputText('');
  }

  function handleDoneTask(id) {
  
  };

    setTaskList(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Zadaj úlohu..."
          value={inputText}
          onChangeText={setInputText}
        />

        <Button title="ADD" onPress={addHandler} />
      </View>

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            done={item.done}
            onPress={() => handleDoneTask(item.id)}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#554949',
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
});