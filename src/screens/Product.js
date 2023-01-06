import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

export default function Product({navigation}) {
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
        <Text>Product screen</Text>
        {/* <Text>{ username }</Text> */}
    </View>
</SafeAreaView>
  )
}