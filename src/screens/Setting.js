import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

export default function Setting({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{height: "13%", width: "100%"}}>
        <TouchableOpacity
            style={{height:"30%", aspectRatio:1.7, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}
            onPress={()=>{
                navigation.goBack()
            }}
        >
            <Icon name="arrow-left"/>
            <Text> Back</Text>
        </TouchableOpacity>
    </View>
    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting screen</Text>
        {/* <Text>{ username }</Text> */}
    </View>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
            style={{height:"30%", aspectRatio:1.7, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}
            onPress={()=>{
                navigation.popToTop()
            }}
        >
            <Icon name="log-out"/>
            <Text> Log out</Text>
        </TouchableOpacity>
    </View>
</SafeAreaView>
  )
}