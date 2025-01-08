import { FlatList, View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';
import { useQuery } from "@apollo/client";
import { useNavigation } from 'expo-router';

import Fetching from './FetchingMessage';
import Error from './ErrorMessage';
import Footer from './Footer';

import PostItem from './PostItem';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../store'
import { GET_POSTS } from "../gql/queries";


export default function PostsScreen( { } ) {
  const navigation = useNavigation();
  const userId = useRecoilValue(userIdState)
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { userId },
  });

  if (loading) return <Fetching />
  if (error) return <Error error={error} />

  function handleInsert(navigation) {
    navigation.navigate("AddPost")
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.users_by_pk.posts}
        renderItem={({ item }) => <PostItem post={item}/>}
        keyExtractor={(item, index) => index}
      />
      <Footer />
      <FAB
        icon={{ name: 'add', color: 'white' }}
        size="large"
        placement="right"
        color="#003366"
        onPress={() => handleInsert(navigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1, // Ensures the list takes up available space.
  },
});