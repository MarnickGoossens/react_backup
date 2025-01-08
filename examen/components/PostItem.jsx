import { View, Text, StyleSheet, Image } from 'react-native';

import { types } from "@/assets/icons/types.js";

export default function PostItem({ post }) {
  var icon
  switch(post.type.icon) {
    case "art":
      icon = types[0]["image"]["uri"]
      break
    case "food":
      icon = types[1]["image"]["uri"]
      break
    case "health":
      icon = types[2]["image"]["uri"]
      break
    case "media":
      icon = types[3]["image"]["uri"]
      break
    case "science":
      icon = types[4]["image"]["uri"]
      break
    case "sport":
      icon = types[5]["image"]["uri"]
      break
    case "travel":
      icon = types[6]["image"]["uri"]
      break
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon}/>
      <View style={styles.content}>
        <Text style={styles.text}>{post.text}</Text>
        <Text style={styles.type}>{post.user.username} - {post.type.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ADD8E6', // Light blue background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular image
    marginRight: 16, // Space between the image and text
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366', // Darker blue
  },
  type: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#005B96', // Medium blue
  },
});