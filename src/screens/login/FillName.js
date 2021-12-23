import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FillName = () => {
  const navigation = useNavigation();
  const [fillName, setFillName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={{fontSize: 20}}>
            What is the name of your comppany or team ?
          </Text>
          <Text>
            This will be the name of your workspace-choose something that your
            team will recognize.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Fill in the name of your company or team"
            value={fillName}
            onChangeText={setFillName}
          />
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={() => {
              navigation.navigate({
                name: 'Login',
                params: {name: fillName},
                merge: true,
              });
            }}>
            <Text> Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    width: 100,
    padding: 6,
    alignItems: 'center',
    borderRadius: 10,
    height: 60,
  },
});

export default FillName;
