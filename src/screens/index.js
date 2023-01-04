import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Login from './Login';
import Setting from './Setting';

const Stack = createNativeStackNavigator()

export default RootComponent = function() {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}