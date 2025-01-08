import { Text, FlatList } from 'react-native';
import { GET_CONTINENTS} from '@/gql/queries';
import { useQuery } from '@apollo/client';


export default function ListContinents() {
  const { data, loading, error} = useQuery(GET_CONTINENTS)
  
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error...</Text>

  return (
    <FlatList
      data={data.continents}
      renderItem={({ item }) => 
        <Text>{ item.name }{item.extra && item.extra[0] && item.extra[0].name !== undefined ? ": " + item.extra[0].name : null}</Text>
      }
      keyExtractor={(item, index) => index}
    />
  );
}