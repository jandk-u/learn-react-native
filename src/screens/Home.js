import { View, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import {updateEmail} from '../redux/actions/updateAction';


export default function Home({route, navigation}) {
    // const { username } = route.params;

    const [number, setNumber] = useState(1);
    const [data, setData] = useState({data: null});
    const info = useSelector((state) => state.personalInfo)
    const [email, onChangeText] = useState("")
    const dispatch = useDispatch();

    const CallAPI = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({data: "data"})
                console.log("Da tra ve Data")
            }, 3000);
        })
    }

    const handleCount = () => {
        let newValue = number + 1;
        setNumber(newValue);
    };

    // const getData = async () => {
    //     let data =  await CallAPI()
    //     console.log("Data: ", data)
    //     return data
    // };

    const getData = async (setData) => {
        let data =  await CallAPI()
        setData(data);
    };

    useEffect(() => {
        console.log("vao man hinh")
        getData(setData)
        console.log("INFO: ", info)
        return () =>{
            console.log("thoats man hinh")
        }
    }, [])

    useEffect(() => {
        console.log("Data da lang nghe: ", data)
    }, [data])

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: "8%", width: "100%", flexDirection: 'row', justifyContent:"space-between"}}>
                {/* <View style={{height:"100%"}}> */}
                     {/* <TouchableOpacity */}
                        {/* style={{height:"30%", aspectRatio: 2.7, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}} */}
                        {/* onPress={()=>{ */}
                            {/* navigation.openDrawer() */}
                        {/* }} */}
                    {/* > */}
                        {/* <Icon name="menu"/> */}
                        {/* <Text> Back</Text> */}
                    {/* </TouchableOpacity> */}
                {/* </View> */}
                <View style={{height:"100%"}}></View>

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
                <Text>EMAIL: { info.email }</Text>
                <Text>Score: { info.score }</Text>
                <Text>ADDRESS: { info.address }</Text>
                <Text>ID: { info.id }</Text>

                <TextInput 
                    style={{height: 40, width: '60%', margin: 12, borderWidth: 1, padding: 10}}
                    onChangeText={onChangeText} value={email} />
                <TouchableOpacity 
                    style={{width: '30%', height: '10%', borderColor: "green", borderWidth: 1, borderRadius:15, justifyContent: "center", alignItems: "center", marginTop: 20, backgroundColor: "green"}}
                    onPress={() => { dispatch(updateEmail(email))} }
                >
                    <Text style={{color: "white"}}>Update email</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Counting number</Text>
                <Text style={{marginTop: 20, fontSize: 35, color: "blue"}}>{number}</Text>
                <TouchableOpacity 
                    style={{width: '30%', height: '10%', borderColor: "green", borderWidth: 1, borderRadius:15, justifyContent: "center", alignItems: "center", marginTop: 20, backgroundColor: "green"}}
                    onPress={handleCount}
                >
                    <Text style={{color: "white"}}>Count</Text>
                </TouchableOpacity>
                {/* <Button title='Count' style={{marginTop: 50}}></Button> */}
            </View>
        </SafeAreaView>
  )
}