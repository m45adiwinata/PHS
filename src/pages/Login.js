import React, {Component} from 'react';
import {
    Text, 
    View,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class Login extends Component<{}> {
    render() {
        return(
            <KeyboardAvoidingView style={styles.logInScreen}  behavior="padding" enabled>
                <View style={styles.bgLogInScreen}>
                    <View style={styles.loginForm}>
                        <Text style={{fontWeight:'bold', fontSize:20, marginBottom:70, alignSelf:'center'}}>Login</Text>
                        <TextInput style={styles.inputs} placeholder="Email"/>
                        <TextInput style={styles.inputs} placeholder="Password"/>
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={{fontWeight:'bold', color:'#ffffff', fontSize:16}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    logInScreen: {
        width: 360,
        height: 640
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      bgLogInScreen: {
        width: 360,
        height: 408,
        opacity: 0.99,
        backgroundColor: "#92c3d2"
      },
      loginForm: {
        width: 309,
        height: 278,
        opacity: 0.99,
        borderRadius: 45,
        backgroundColor: "#ffffff",
        marginTop:200,
        marginLeft:25
      },
      inputs: {
          borderColor: 'blue',
          borderBottomWidth: 1,
          width:200,
          height:40,
          alignSelf: 'center'
      },
      inputLabels: {
          marginLeft:55
      },
      loginBtn: {
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:40,
          height: 50,
          width: 100,
          backgroundColor: 'skyblue',
          borderRadius: 10
      }
});