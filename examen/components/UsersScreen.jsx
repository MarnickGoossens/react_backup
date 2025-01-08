import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from "@apollo/client";

import Fetching from './FetchingMessage';
import Error from './ErrorMessage';
import Footer from './Footer';

import UserItem from './UserItem';
import { GET_USERS } from "../gql/queries";

export default function UsersScreen( { } ) {

  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <Fetching />
  if (error) return <Error error={error} />

  return (
    <View style={styles.container}>
      <FlatList
        data={data.users}
        renderItem={({ item }) => <UserItem user={item}/>}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.listContent}
      />
      <Footer />
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