import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { useState, useEffect } from 'react';
import UsaDB from '../app/usa_db';
import { FAB } from 'react-native-elements';

export default function ListPresidents({navigation}) {
  const [data, setData] = useState([]);

  async function getPresidents() {
    const result = await UsaDB.getPresidents();
    setData(result);
  }

  useEffect(() =>{
    if(id != 0){
      getPresidents();
    }
  }, [])

  function handleOnPress(id) {
    navigation.navigate('Details', { id: id });
  }

  function handleInsert(){
    navigation.navigate('Details', { id: 0 });
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleOnPress(item.id)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.term}>{item.term}</Text>
          </TouchableOpacity>
        )}
      />

    <FAB
      icon={{ name: 'add', color: 'white' }}
      size="large"
      placement="right"
      color="#206587"
      onPress={handleInsert}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#cceeff',
    padding: 20,
    marginVertical: 4,
  },
  name: {
    fontSize: 20,
  },
  term: {
    fontSize: 10,
  },
});