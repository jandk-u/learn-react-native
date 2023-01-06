import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Login from './Login';
import Setting from './Setting';
import Vendor from './Vendor';
import Product from './Product';
import Profile from './Profile';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Product" component={Product} />
            <Drawer.Screen name="Vendor" component={Vendor} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    );
}

export default RootComponent = function() {

    return(
        <NavigationContainer>
            {/* <Drawer.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name='Login' component={Login}/>
                <Drawer.Screen name="Setting" component={Setting} />
            </Drawer.Navigator> */}
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name="HomeDrawer" component={HomeDrawer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}