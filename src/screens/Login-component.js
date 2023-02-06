import { Image, Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
import { height, progressiveRenderingEnabled } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';


const windownWidth = Dimensions.get("window").width;
const windownHeight = Dimensions.get("window").height;
const SIGN_IN = "SIGN_IN";
const GET_STARTED = "GET_STARTED";

export default Login = ({navigation}) => {
    
    const [getUsername, setUsername] = useState("");
    // const [getPasswordVisible, setPasswordVisible] = useState(false);
    const [page, setPage] = useState(SIGN_IN);

    return (
        <View style={{height: "100%", width: "100%"}}>
            <View style={{height: "25%", width: "100%"}}>
                <MenuComponent page={page} setPage={setPage}/>
            </View>
            <View style={{height: "50%", width: "100%"}}>
                {page === SIGN_IN? <LoginComponent navigation={navigation}/>: <SignUpComponent/>}
            </View>
            <View>
                <SocialComponent/>
            </View>
                        
        </View>
    );
}

const MenuComponent = ({page, setPage}) => {
    return (
        <View style={{flex: 1}}>
            <StatusBar barStyle='light-content'/>
            <View style={{width: '100%', height: "100%"}}>
                <View style={{justifyContent:'center', alignItems: 'center', width: '100%', height: '75%',backgroundColor: '#4D8D6E'}}>
                    <View>
                        <Text style={{ fontSize: 50, fontWeight:'600', color: "#FFFFFF"}}>wasty.</Text>
                        <Text style={{ marginLeft: 6, marginTop: 0, color: "#FFFFFF"}}>think for nature</Text>
                    </View>
                </View>
                <View style={{height: 50, flexDirection: 'row'}}>
                    {/* ==== SIGN IN ==== */}
                    <TouchableOpacity 
                        style={{width: "50%", height: "100%", justifyContent: 'center', alignItems: 'center', }}
                        onPress={() => setPage(SIGN_IN)}
                        disabled={page === SIGN_IN? true: false}
                        >
                        <Text style={{fontSize: 16, color: '#4d8d6e'}}>Sign In</Text>
                        {page === SIGN_IN ? <View style={{width: "100%", height: 3 ,backgroundColor: "#4d8d6e", position: 'absolute', bottom: 0}}/> : null}
                    </TouchableOpacity>
                    {/* ==== GET STARTED ==== */}
                    <TouchableOpacity 
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => setPage(GET_STARTED)}
                        disabled={page === GET_STARTED? true: false}
                        >
                        <Text style={{fontSize: 16, color: '#4d8d6e'}}>Get started</Text>
                        {page === GET_STARTED ? <View style={{width: "100%", height: 3 ,backgroundColor: "#4d8d6e", position: 'absolute', bottom: 0}}/> : null}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const LoginComponent = ({navigation}) =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [getPasswordVisible, setPasswordVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{height: "100%", width: '100%', backgroundColor: "#eeeeee", justifyContent: "center"}}>
            <Text style={{fontSize: 24, marginLeft: 30, marginTop: 10}}>Login in your account.</Text>
            <View style={{width: windownWidth-60, height: 50, marginLeft: 30, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffffff'}}>
                <Icon style={{marginLeft: 10}} name='user'></Icon>
                <Text style={{marginLeft: 10}}>Username</Text>
                <View style={{marginLeft: 10, width: 2, height: '70%', backgroundColor: "#4d8d6e"}}></View>
                <TextInput 
                    style={{height: '100%', flex: 1, marginLeft: 5}}
                    placeholder='Username'
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={{width: windownWidth-60, height: 50,flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10, backgroundColor:'#ffffff'}}>
                <Icon style={{marginLeft: 10}} name='lock'></Icon>
                <Text style={{marginLeft: 10}}>Password</Text>
                <View style={{marginLeft: 10, width: 2, height: '70%', backgroundColor: "#4d8d6e"}}></View>
                <TextInput 
                    style={{height: '100%', flex: 1, marginLeft: 5}}
                    placeholder='Password' 
                    secureTextEntry={getPasswordVisible ? true: false}
                    onChangeText={setPassword}
                    value={password}
                    />
                <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={() => {setPasswordVisible(!getPasswordVisible)}}
                    >
                    {getPasswordVisible? <Icon name='eye'></Icon>: <Icon name='eye-off'></Icon>}
                </TouchableOpacity>
            </View>
            <View style={{width: windownWidth-60, height: 50,flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 5}}>
                <TouchableOpacity 
                    style={{position:'absolute', right: 0}}
                    onPress={() => {setModalVisible(!modalVisible)}}
                    >
                    {modalVisible? <ForgotPassword modalVisible={modalVisible} setModalVisible={setModalVisible}/> : null}
                    <Text>Forgot password ?</Text>    
                </TouchableOpacity>
            </View>
            <View style={{width: windownWidth-60, height: 50, flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10, }}>
                <TouchableOpacity 
                    style={{width: '100%', height: '100%',  alignItems: 'center', justifyContent: 'center' , backgroundColor: '#4d8d6e', borderRadius: 20}}
                    onPress={()=>{
                      navigation.navigate("HomeTabs")
                    }}>
                    <Text style={{ fontSize: 20, color: 'white',}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const SignUpComponent = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [getPasswordVisible, setPasswordVisible] = useState(true);
    return (
        <View style={{height: "100%", width: '100%', backgroundColor: "#eeeeee", justifyContent: "center"}}>
            <Text style={{fontSize: 24, marginLeft: 30, marginTop: 10}}>Register account</Text>
            <View style={{width: windownWidth-60, height: 50, marginLeft: 30, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffffff'}}>
                <Icon style={{marginLeft: 10}} name='user'></Icon>
                <Text style={{marginLeft: 10}}>Username</Text>
                <View style={{marginLeft: 10, width: 2, height: '70%', backgroundColor: "#4d8d6e"}}></View>
                <TextInput 
                    style={{height: '100%', flex: 1, marginLeft: 5}}
                    placeholder='Username'
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={{width: windownWidth-60, height: 50,flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10, backgroundColor:'#ffffff'}}>
                <Icon style={{marginLeft: 10}} name='lock'></Icon>
                <Text style={{marginLeft: 10}}>Password</Text>
                <View style={{marginLeft: 10, width: 2, height: '70%', backgroundColor: "#4d8d6e"}}></View>
                <TextInput 
                    style={{height: '100%', flex: 1, marginLeft: 5}}
                    placeholder='Password' 
                    secureTextEntry={getPasswordVisible ? true: false}
                    onChangeText={setPassword}
                    value={password}
                    />
                <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={() => {setPasswordVisible(!getPasswordVisible)}}
                    >
                    {getPasswordVisible? <Icon name='eye'></Icon>: <Icon name='eye-off'></Icon>}
                </TouchableOpacity>
            </View>
            <View style={{width: windownWidth-60, height: 50,flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 10, backgroundColor:'#ffffff'}}>
                <Icon style={{marginLeft: 10}} name='lock'></Icon>
                <Text style={{marginLeft: 10}}>Password</Text>
                <View style={{marginLeft: 10, width: 2, height: '70%', backgroundColor: "#4d8d6e"}}></View>
                <TextInput 
                    style={{height: '100%', flex: 1, marginLeft: 5}}
                    placeholder='Password' 
                    secureTextEntry={getPasswordVisible ? true: false}
                    onChangeText={setPasswordAgain}
                    value={passwordAgain}
                    />
                <TouchableOpacity 
                    style={{marginRight: 10}}
                    onPress={() => {setPasswordVisible(!getPasswordVisible)}}
                    >
                    {getPasswordVisible? <Icon name='eye'></Icon>: <Icon name='eye-off'></Icon>}
                </TouchableOpacity>
            </View>
            <View style={{width: windownWidth-60, height: 50, flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 20, }}>
                <TouchableOpacity 
                    style={{width: '100%', height: '100%',  alignItems: 'center', justifyContent: 'center' , backgroundColor: '#4d8d6e', borderRadius: 20}}>
                    <Text style={{ fontSize: 20, color: 'white',}}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', justifyContent:'center', marginTop: 20}}>
                <Text>By creating an account, you agree to Wasty</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity><Text style={{color: 'blue'}}>Terms of use</Text></TouchableOpacity>
                    <Text> and </Text>    
                    <TouchableOpacity><Text style={{color: 'blue'}}>Privacy policy.</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const SocialComponent = () => {

    return (
        <View style={{width: '100%', height: '100%', backgroundColor: "#eeeeee"}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: "30%", height: 1, backgroundColor: 'black'}}/>
                <Text style={{marginLeft: 10, marginRight: 10, fontSize: 14}}>Or connect with </Text>
                <View style={{width: "30%", height: 1, backgroundColor: 'black'}}/>
            </View>
            <View style={{height: 30, backgroundColor:"#eeeeee"}} />
            <View style={{width: windownWidth-80, height: 60, marginLeft: 40, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{width: '50%', height: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10}}>
                    <Image source={require('../images/google.png')} style={{marginLeft: 20, height: "50%", width: "30%", resizeMode:'contain'}}></Image>
                    <Text>Google</Text>
                </TouchableOpacity>
                <View style={{width: 20, height: '100%', backgroundColor:"#eeeeee"}} />
                <TouchableOpacity style={{width: '50%', height: '100%', flexDirection: 'row', alignItems: 'center',  backgroundColor: 'white', borderRadius: 10}}>
                    <Image source={require('../images/apple.png')} style={{marginLeft: 20, height: "50%", width: "30%", resizeMode:'contain'}}></Image>
                    <Text>Apple</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: windownWidth-80, height: 60, marginLeft: 40, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{width: '50%', height: '100%', flexDirection: 'row',alignItems: 'center',  backgroundColor: 'white', borderRadius: 10}}>
                    <Image source={require('../images/twitter.png')} style={{marginLeft: 20, height: "50%", width: "30%", resizeMode:'contain'}}></Image>
                    <Text>Twitter</Text>
                </TouchableOpacity>
                <View style={{width: 20, height: '100%', backgroundColor:"#eeeeee"}} />
                <TouchableOpacity style={{width: '50%', height: '100%', flexDirection: 'row',alignItems: 'center',  backgroundColor: 'white', borderRadius: 10}}>
                    <Image source={require('../images/facebook.png')} style={{marginLeft: 20, height: "50%", width: "30%", resizeMode:'contain'}}></Image>
                    <Text>Facebook</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
}

const ForgotPassword = ({modalVisible, setModalVisible}) =>{
    const [email, setEmail] = useState('')
    
    return (
        <View style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'white'}}>
            <Modal
                style={{margin: 20, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, padding: 35, alignItems:'center', opacity: 0.8}}
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Model has been close!');
                    setModalVisible(!modalVisible)
                }}
            >
            <View style={{flex: 1, marginLeft: 20, marginRight: 20, marginTop: 200, marginBottom: 200,  backgroundColor: '#ffffff', borderRadius: 20, padding: 35}}>
                <View style={{width: '100%', height: '33%' }}>
                    <Text style={{justifyContent: 'center', alignContent: 'center', fontSize: 24}}>Forgot Password</Text>
                    <Text style={{marginTop: 30, marginBottom: 0}}>Enter your email account to get it back.</Text>
                </View>
                <View style={{height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Email: </Text>
                    <TextInput 
                            style={{height: '80%', flex: 1, marginLeft: 5, borderWidth: 1}}
                            placeholder='Email'
                            onChangeText={setEmail}
                            value={email}
                        />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5}}>
                    <TouchableOpacity
                        style={{width: 100, height: 40, borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginLeft:30, backgroundColor: '#4d8d6e'}}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={{color: 'white'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width: 100, height: 40, borderWidth: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 30, backgroundColor: '#4d8d6e'}}
                        onPress={() => setModalVisible(!modalVisible)} // change function when send resquest on server
                    >
                        <Text style={{color: 'white'}}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </View>
    )
}