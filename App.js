import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  function inputTextHandler(text) {
    setInputText(text);
  }
  function addHandler() {
    setTaskList([...taskList, inputText]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputTextHandler} style={styles.input} placeholder="Zadaj úlohu ...... "/>
        <Button onPress={addHandler} title="ADD"/>
      </View>
      <View style={styles.taskContainer}>
        {taskList.map((i) => (
          <Text>{i}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    margin: 4,
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  taskContainer: {
    margin: 4,
    flex: 2,
    width: '100%',
    borderTopWidth: 3,
    padding: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 3, borderColor: "#554949", borderRadius: 8, width: '80%',
  },
});