import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GET_USERS } from "../gql/queries";
import { useQuery } from "@apollo/client";

import Footer from './Footer';
import { useState } from 'react';

export default function AddPostScreen({  }) {
  const { data, loading, error } = useQuery(GET_USERS);
  const [text, setText] = useState("")

  if (loading) return <Fetching />
  if (error) return <Error error={error} />

  function handleChangeText(value) {
    setText(value)
    console.log(value)
  }

  function handleChangeType(value) {

  }
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          onChangeText={handleChangeText}
          style={styles.input}
          placeholder="Enter post text"
          placeholderTextColor="#666"
        />
        <Picker
          onValueChange={handleChangeType}
          style={styles.input}>

        </Picker>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Post</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, // Makes the wrapper take the full screen space
    justifyContent: 'space-between', // Ensures the footer is at the bottom
  },
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: '#ADD8E6', // Light blue background
    borderRadius: 12, // Rounded corners for the form container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#005B96', // Subtle blue border
    padding: 12,
    borderRadius: 8, // Rounded corners for inputs
    backgroundColor: '#ffffff', // White background for inputs
    color: '#003366', // Darker blue text
  },
  button: {
    backgroundColor: "#003366", // Blue button
    padding: 16,
    borderRadius: 8, // Rounded corners
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2, // Shadow for Android
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', // White text for contrast
  },
});