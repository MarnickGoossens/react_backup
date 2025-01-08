import { View, StyleSheet } from "react-native";

import { useEffect } from 'react';
import UsaDB from './usa_db.js';

import ListPresidents from '@/components/ListPresidents';
import DetailsPresident from '@/components/DetailsPresident';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ListPresidents navigation={navigation} />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <DetailsPresident route={route} navigation={navigation} />
    </View>
  );
}

export default function Index() {
  useEffect(() => {
    UsaDB.initDb();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'All presidents' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});