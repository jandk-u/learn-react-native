import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

export default function Profile({navigation}) {

  const info = useSelector((state) => state.personalInfo)
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
        <Text>Profile screen</Text>
        {/* <Text>{ username }</Text> */}
        <Text>EMAIL: { info.email }</Text>
        <Text>Score: { info.score }</Text>
        <Text>ADDRESS: { info.address }</Text>
        <Text>ID: { info.id }</Text>

    </View>
</SafeAreaView>
  )
}