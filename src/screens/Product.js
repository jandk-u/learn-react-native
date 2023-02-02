import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

import PictureList from './picture-list';
import { TextInput } from 'react-native-gesture-handler';
import { ceil, set } from 'react-native-reanimated';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Product({navigation}) {

    const [response, setResponse] = useState();

    const [employee, setEmployee] = useState({id:'', employee_name:'', employee_salary: '', employee_age: '', profile_image: ''})

    const callGETurl = (number) => {
        console.log('GET URL')
        const url = 'https://dummy.restapiexample.com/api/v1/employee/' + String(number)
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then( async (res) => {
            console.log(res)
            // res = JSON.parse(JSON.stringify(res));  
            console.log(res.data) 
            setEmployee(res.data);
            }
        )
        .catch(err => console.log('ERROR GET: ', err));
    }

    const callPOSTurl = (employee) => {
        console.log('POST URL')
        const url = 'https://dummy.restapiexample.com/api/v1/create'
        fetch(url, 
            { 
                method: 'POST',
                body: JSON.stringify({employee_name: employee.employee_name, employee_salary: employee.employee_salary, employee_age: employee.employee_age}),
            })
        .then(response => response.json())
        .then( async (response) => {
            console.log(response)
            setEmployee({id:'', employee_age:'', employee_salary:'', employee_name:''})
            Alert.alert(response.message)
        })
        .catch(err => console.log('ERROR POST: ', err));
    }

    const callPUTurl = (employee) => {
        console.log('PUT URL')
        const url = 'https://dummy.restapiexample.com/api/v1/update/' + String(employee.id)
        fetch(url, 
            { 
                method: 'PUT',
                body: JSON.stringify({employee_name: employee.employee_name, employee_salary: employee.employee_salary, employee_age: employee.employee_age}),
            })
        .then(response => response.json())
        .then( async (response) => {
            console.log(response)
            Alert.alert(response.message)
        })
        .catch(err => console.log('ERROR PUT: ', err));
    }

    const callDELETEurl = (employee) => {
        console.log('DELETE URL')
        const url = 'https://dummy.restapiexample.com/api/v1/delete/' + String(employee.id)
        fetch(url,
            {
                method: 'GET',
            })
        .then((response => response.json()))
        .then( async (response) => {
            console.log(response)
            Alert.alert(response.message)
        })
        .catch(err => console.log('ERROR DELETE: ', err));
    }

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{height: 30, width: "100%", position: 'absolute', right: 0, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{height:"100%", flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}
                onPress={()=>{
                    navigation.goBack()
                }}
            >
                <Icon name="arrow-left"/>
                <Text> Back</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 50, height: 300, width: '100%'}}>
            <PictureList/>
        </View>
        <View style={{ height: 60, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <TouchableOpacity 
                style={{width: 60, height: 30, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor:'grey', borderWidth: 1, backgroundColor: 'blue', marginRight: 20}}
                onPress={() => {
                    callGETurl(15)
                    // console.log(employee)
                }}
                >
                <Text style={{color: 'white'}}>GET</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{width: 60, height: 30, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor:'grey', borderWidth: 1, backgroundColor: 'green', marginRight: 20}}
                onPress={() => {
                    employee_tmp = {employee_name: employee.employee_name, employee_salary: employee.employee_salary, employee_age: employee.employee_age}
                    console.log(employee_tmp)
                    callPOSTurl(employee_tmp)
                }}
                >
                <Text style={{color: 'white'}}>POST</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{width: 60, height: 30, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor:'grey', borderWidth: 1, backgroundColor: 'orange', marginRight: 20}}
                onPress={() => {
                    callPUTurl(employee)
                }}
                >
                <Text style={{color: 'white'}}>PUT</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{width: 60, height: 30, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor:'grey', borderWidth: 1, backgroundColor: 'red'}}
                onPress={() => {
                    callDELETEurl(employee)

                }}
                >
                <Text style={{color: 'white'}}>DELETE</Text>
            </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: 350, borderWidth: 1, marginLeft: 10, marginRight: 10, marginBottom: 10, justifyContent: 'center', alignContent: 'center'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, justifyContent: 'space-between', marginRight: 30, marginBottom: 10}}>
                <Text style={{}}>ID: </Text>
                <TextInput style={{width: 200, height: '100%', }}
                    value={String(employee.id)}
                    onChangeText={(text) => setEmployee((old) => ({...old,id:text}))}
                    editable={false}
                />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 30, alignItems: 'center', justifyContent: 'space-between', marginRight: 30, marginBottom: 10}}>
                <Text style={{}}>Employee Name:</Text>
                <TextInput style={{width: 200, height: 60, borderWidth: 1,}}
                    value={String(employee.employee_name)}
                    onChangeText={(text) => setEmployee((old) => ({...old,employee_name:text}))}
                />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 30, alignItems: 'center', justifyContent: 'space-between', marginRight: 30, marginBottom: 10}}>
                <Text style={{}}>Employee Salary:</Text>
                <TextInput style={{width: 200, height: 60, borderWidth: 1,}}
                    value={String(employee.employee_salary)}
                    onChangeText={(text) => setEmployee((old) => ({...old,employee_salary:text}))}
                />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 30, alignItems: 'center', justifyContent: 'space-between', marginRight: 30, marginBottom: 10}}>
                <Text style={{}}>Employee Age:</Text>
                <TextInput style={{width: 200, height: 60, borderWidth: 1,}}
                    value={String(employee.employee_age)}
                    onChangeText={(text) => setEmployee((old) => ({...old,employee_age:text}))}
                />
        </View>
        </View>
    </SafeAreaView>
    )
}