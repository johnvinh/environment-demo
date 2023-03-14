import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import {useState} from "react";

export default function App()
{
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
          style={{height: 40}}
          placeholder="New item..."
          onChangeText={newText => setText(newText)}
          defaultValue={text}
      />
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
