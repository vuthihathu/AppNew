import React from 'react';
import {Text, View} from 'react-native';

const Home = ({route}) => {
  React.useEffect(() => {
    if (route.params?.name) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.name]);
  React.useEffect(() => {
    if (route.params?.email) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.email]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Name :{route.params?.name}</Text>
      <Text>Email :{route.params?.email}</Text>
    </View>
  );
};

export default Home;
