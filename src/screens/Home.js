import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';


export default function Home({route, navigation}) {
    // const {username} = route.params;
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: "8%", width: "100%", flexDirection: 'row', justifyContent:"space-between"}}>
                <View style={{height:"100%"}}>
                    <TouchableOpacity
                        style={{height:"30%", aspectRatio: 2.7, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    >
                        <Icon name="arrow-left"/>
                        <Text> Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: "100%", right: 0}}>
                    <TouchableOpacity
                        style={{height:"30%", aspectRatio:1.7, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}
                        onPress={()=>{
                            navigation.navigate("Setting")
                        }}
                    >
                        <Icon name="settings"/>
                    </TouchableOpacity>
                </View>    
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home screen</Text>
                {/* <Text>{ username }</Text> */}
            </View>
        </SafeAreaView>
  )
}