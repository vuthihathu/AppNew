import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

const LoginScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <Text style={styles.text}>ĐĂNG NHẬP</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder ="Tên đăng nhập "
              style ={styles.input}
              >
            </TextInput>
    
            <TextInput
              placeholder ="Mật khẩu"
              style ={styles.input}
              secureTextEntry
            >
            </TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.4}
              onPress={() => navigation.navigate('HomeScreen')}
              >
              <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>
          </View>
          
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text :{
      fontWeight : '800',
      fontSize :20,
    },
    inputContainer :{
      width :'80%'
    },
    input :{
      backgroundColor :'white',
      paddingHorizontal :15 ,
      paddingVertical :10 ,
      borderRadius :10,
      marginTop : 5,
    } ,
    button :{
      backgroundColor :'orange',
      width : '100%',
      padding :15 ,
      alignItems :'center',
      borderRadius :10,
    },
    buttonContainer :{
      width : '60%',
      justifyContent : 'center',
      alignItems :'center',
      marginTop :40,
    },
    buttonText :{
      color :'black',
      fontWeight : '600',
      fontSize :16,
    }
});
  
export default LoginScreen;