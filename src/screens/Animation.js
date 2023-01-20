import { Animated, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Easing } from 'react-native-reanimated'
// import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Animation() {
    
    const topMotion = useRef(new Animated.Value(0)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    const motion = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(
                motion,
                {
                    toValue: 100,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }
            ),
            Animated.loop(
                Animated.sequence(
                    [Animated.timing(
                        spinValue,
                        {
                            toValue: 0,
                            duration: 250,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: -1,
                            duration: 500,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: 0,
                            duration: 500,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: 1,
                            duration: 500,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }
                    ),
                    Animated.timing(
                        spinValue,
                        {
                            toValue: 0,
                            duration: 250,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }
                    )
                ]))
            ]
        ).start();
    })
        
    const spin = spinValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-45deg','0deg', '45deg']
    })

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Animated.View style={{transform: [{rotate: spin}], marginTop: topMotion, width: 100, height: 100, backgroundColor: "green", marginBottom: 70}}>
                    <Image source={require("../images/bell.png")} resizeMode="stretch" style={{width: 100, height: 100}}/>
                    
                </Animated.View>

                <Animated.View style={{alignSelf: 'center', position: 'absolute',bottom: motion }}>
                    <TouchableOpacity style={{width: 300, height: 50,  borderRadius:15, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}} 
                        onPress={() => Animated.timing(spinValue).stop()}>
                        <Text>Stop</Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>
            
        </SafeAreaView>
    )
}