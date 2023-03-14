import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import {useState} from "react";

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function App()
{
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

    function onButtonPress()
    {
        const newItem = {
            id: items.length,
            text: text
        }
        setItems([...items, newItem]);
    }

  return (
    <View style={styles.container}>
      <TextInput
          style={{height: 40}}
          placeholder="New item..."
          onChangeText={newText => setText(newText)}
          defaultValue={text}
      />
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text>Add Item</Text>
      </TouchableOpacity>
        <FlatList data={items} renderItem={({item}) => <Item title={item.text} />} keyExtractor={item => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      marginVertical: 200
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
