import { View, Text, SafeAreaView, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Stack } from '@react-native-material/core'
import { Easing } from 'react-native-reanimated';

export default function Animation() {
    const topMotion = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            topMotion, 
            {
                toValue:600,
                duration: 2000,
                useNativeDriver: false,
                // easing: Easing.linear
                // easing: Easing.ease
                // easing: Easing.quad
                // easing: Easing.cubic
                // easing: Easing.poly(4)
                // easing: Easing.sin
                // easing: Easing.back(1.2)
                // easing: Easing.bezierFn(0.6, 0.04, 0.98, 0.335),
            }
        ).start();

    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ flex: 1, borderWidth: 5, borderColor: 'red'}}>
                <Animated.View style={{marginTop: topMotion, width: 100, height: 100, backgroundColor: "green", borderWidth: 1}}></Animated.View>
            </View> 
            
        </SafeAreaView>
    )
}