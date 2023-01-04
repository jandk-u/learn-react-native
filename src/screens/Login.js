import { Text, StyleSheet, View, StatusBar, SafeAreaView, TextInput } from 'react-native';
import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';

import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default Login = ({navigation}) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false)

    return (
        <ImageBackground 
          style={{height: '100%', width: '100%'}} 
          resizeMode={'cover'}
          source={require('../images/bg.jpg')}>
          <StatusBar barStyle={"light-content"}/>
          <SafeAreaView style={{flex:1}}>

            <View style={{width: '100%', height: '100%'}}>
              
              <View style={{width: '100%', marginTop: 0.5*windowHeight, alignItems: 'center'}}>
              {/* Username */}
                <View style={{width: '70%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={{color: 'white'}}>Username:</Text>
                  <TextInput 
                    style={{height: '100%', width: '70%', borderBottomWidth: 1, borderBottomColor:'white', color: 'white'}}
                    placeholder="useless placeholder"
                    placeholderTextColor="white"
                    keyboardType=""/>
                </View>
              {/* Password */}
                <View style={{width: '70%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Text style={{color: 'white'}}>Password:</Text>
                  <TextInput 
                    style={{height: '100%', width: '70%', borderBottomWidth: 1, borderBottomColor:'white', color: 'white', paddingRight:30}}
                    placeholder=""
                    placeholderTextColor="white"
                    secureTextEntry={getPasswordVisible? false : true}
                  />
                  <TouchableOpacity 
                    style={{height:"20%", width: 20, position: 'absolute', right: 0}}
                    onPress={() => {setPasswordVisible(!getPasswordVisible)}}
                    >
                    {
                      getPasswordVisible?
                        <Icon name="eye" color="white" /> : <Icon name="eye-off" color="white" />
                    }
                    
                  </TouchableOpacity>
                  
                </View>
              </View>
              <View style={{width: '100%', height: "20%", alignItems: 'center', justifyContent: "center"}}>
                {/* Button sign up and sign in */}
                <View style={{width: '50%', height:"20%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <TouchableOpacity 
                    style={{width: "40%", height:"120%", borderWidth: 1, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "gray"}}
                    onPress={()=>{
                      navigation.navigate("Home")
                    }}
                    >
                    <Text style={{color: "white"}}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{width: "40%", height:"120%", borderWidth: 1, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "gray"}}>
                    <Text style={{color: "white"}}>Sign up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
          
        </ImageBackground>
    )
  }

const styles = StyleSheet.create({})