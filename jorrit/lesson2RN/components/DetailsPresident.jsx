import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import UsaDB from '../app/usa_db';

export default function DetailsPresident({route, navigation}) {
  const { id } = route.params;

  const [president, setPresident] = useState({id: 0, name: '', term: ''});

  async function getPresidents(id) {
    const result = await UsaDB.getPresidentById(id);
    setPresident(result);
  }

  async function updatePresident(president) {
    await UsaDB.updatePresident(president);
  }

  async function deletePresident(id) {
    await UsaDB.deletePresident(id);
  }

  useFocusEffect(() =>{
    getPresidents(id);
  })
  
  function handleChangeName(value) {
    setPresident({ ...president, name: value });
  }

  function handleChangeTerm(value) {
    setPresident({ ...president, term: value });
  }
  
  function handleUpdate() {
    updatePresident(president);
    navigation.goBack();
  }

  function handleDelete() {
    deletePresident(id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleChangeName}
        style={styles.input}
        value={president.name}
      />
      <TextInput
        onChangeText={handleChangeTerm}
        style={styles.input}
        value={president.term}
        keyboardType='numeric'
      />
      {id != 0 && 
      <>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.name}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.name}>Update</Text>
      </TouchableOpacity>
      </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  button: {
    backgroundColor: '#cceeff',
    padding: 20,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
  },
  input: {
    marginBottom: 15,
    borderWidth: 0.5,
    padding: 10,
  },
});