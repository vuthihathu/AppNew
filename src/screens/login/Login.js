import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = ({route}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  React.useEffect(() => {
    if (route.params?.name) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.name]);
  return (
    <View>
      <View style={{padding: 15}}>
        <TextInput
          style={styles.input}
          placeholder="Your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Text>We will send you an email that will instantly sign you in.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.4}
          onPress={() => {
            navigation.navigate({
              name: 'Home',
              params: {email: email, fillname: route.params?.name},
              merge: true,
            });
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    width: '90%',
    padding: 6,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: '60%',
  },
  buttonText: {
    color: 'black',
    fontWeight: '400',
    fontSize: 19,
    padding: 10,
  },
  input: {
    marginTop: 300,
    fontSize: 19,
    marginBottom: 10,
  },
});

export default Login;
