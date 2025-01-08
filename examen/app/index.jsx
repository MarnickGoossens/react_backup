import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';

import UsersScreen from '@/components/UsersScreen';
import PostsScreen from '@/components/PostsScreen';
import AddPostScreen from '@/components/AddPostScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import configData from "@/gql/config.json";

const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    'x-hasura-admin-secret': configData.qlkey
  },
  cache: new InMemoryCache()
});

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Users' component={UsersScreen} />
      <Stack.Screen name='Posts' component={PostsScreen} />
      <Stack.Screen name='AddPost' component={AddPostScreen} />
    </Stack.Navigator>
  )
}

export default function Index() {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <MyStack />
      </RecoilRoot>
    </ApolloProvider>
  );
}