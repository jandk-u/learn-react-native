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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import Home from './Home';
// import Login from './Login';
import Login from './Login-component';
import Setting from './Setting';
import Vendor from './Vendor';
import Product from './Product';
import Profile from './Profile';
import PictureList from './picture-list';

import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:()=>(
                    <Icon name="home"/>
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon:()=>(
                    <Icon name="user"/>
                )
            }}
            />
            <Tab.Screen name="Product" component={Product} options={{
                tabBarIcon:()=>(
                    <Icon name="package"/>
                    )
                }}
            />
            <Tab.Screen name="Setting" component={Setting} options={{
                tabBarIcon:()=>(
                    <Icon name="settings"/>
                )
                }}
            />
        </Tab.Navigator>
    )
}

export default RootComponent = function() {

    return(
        <Provider store={store}>
            <NavigationContainer>
                {/* <Drawer.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name='Login' component={Login}/>
                    <Drawer.Screen name="Setting" component={Setting} />
                </Drawer.Navigator> */}
                <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Login' component={Login}/>
                    {/* <Stack.Screen name="HomeDrawer" component={HomeDrawer}/> */}
                    <Stack.Screen name="HomeTabs" component={HomeTab}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}