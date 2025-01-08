import { View, Text, Pressable, StyleSheet } from 'react-native';

import { useSetRecoilState } from 'recoil';

import { userIdState } from '../store'
import { useNavigation } from 'expo-router';


function handleClick(e, setUserId, navigation) {
  setUserId(e.id)
  navigation.navigate("Posts")
}

export default function UserItem({ user }) {
  const setUserId = useSetRecoilState(userIdState)
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container}
      onPress={() => handleClick(user, setUserId, navigation)}>
      <View style={styles.column}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.small}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16, // Space on the left and right
    marginVertical: 8,
    padding: 16,
    borderRadius: 12, // Rounded corners
    backgroundColor: '#ADD8E6', // Light blue background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  column: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366', // Darker blue for contrast
  },
  small: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#005B96', // Medium blue for subtle effect
  },
});