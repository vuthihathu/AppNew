import React from 'react';
import {Text, View} from 'react-native';

const Home = ({route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Name :{route.params?.fillname}</Text>
      <Text>Email :{route.params?.email}</Text>
    </View>
  );
};

export default Home;
