import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Validation() {

    const [email, onChangeEmail] = useState('');
    const [isValidEmail, setValidEmail] = useState(true);
    const [number, onchangeNumber] = useState('');
    const [isValidPhone, setValidPhone] = useState(true);

    const verifyEmail = (email) => {
        let emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        isValid = emailRegex.test(email)
        if (!email) return true;
        if (isValid) {
            return true;
        }
        return false;
    }

    const verifyPhoneNumber = (phone) => {
        let phoneRegex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/)
        if (!phone) return true;
        if (phoneRegex.test(phone)) {
            return true;
        }
        return false;
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <Text style={{padding: 10, fontSize: 20}}>Email:</Text>
            <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                onChangeText={(text)=>{
                    onChangeEmail(text)
                    isValid = verifyEmail(text)
                    isValid? setValidEmail(true): setValidEmail(false)
                        }
                    }
                value={email}
            />
            <Text style={{padding: 10, fontSize:20, color: "red"}}>{isValidEmail?'':'Email is invalid'}</Text>
            <Text style={{padding: 10, fontSize: 20}}>Phone</Text>
            <TextInput
                style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
                onChangeText={(text)=>{
                    onchangeNumber(text)
                    isPhone = verifyPhoneNumber(text)
                    setValidPhone(isPhone)
                    }}
                value={number}
                keyboardType='numeric'
            />
            <Text style={{padding: 10, fontSize:20, color: "red"}}>{isValidPhone? '': 'Phone number is invalid'}</Text>
        </SafeAreaView>   
    )
}