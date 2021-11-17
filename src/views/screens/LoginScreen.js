import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native';

import HomeScreen from './HomeScreen';

const LoginScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <ImageBackground source = {require('../../assets/backgroung.png')}>
              
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

          </ImageBackground>
          
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor :'pink',
    },
    text :{
        fontWeight : '400',
        fontSize :20,
        color : 'green',
    },
    inputContainer :{
        width :'70%'
    },
    input :{
        backgroundColor :'white',
        paddingHorizontal :10 ,
        paddingVertical :10 ,
        borderRadius :10,
        marginTop : 10,
        borderWidth :2 ,
    },
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