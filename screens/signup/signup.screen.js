import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-paper';
import onBoardingIcons from '../../utils/images/onBoardingIcons'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './signup.styles';
import color from '@/themes/app.colors';
import { router } from 'expo-router';

const SignUp = () => {
    const snapPoints = useMemo(() => ['10%', '94%'], []);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const loginPress = () => {
        console.log('login')
    }
    return (
        <BottomSheet
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{
                backgroundColor: '#f3f5fc',
            }}
            handleIndicatorStyle={{
                backgroundColor: '#d4dbe7'
            }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.header}>New to Moneyfront? Sign Up</Text>
                <View style={styles.inputContainer}>
                    <KeyboardAvoidingView>
                        <TextInput
                            value={name}
                            outlineColor='transparent'
                            placeholder=" Name"
                            placeholderTextColor={color.onboardingPlaceholderColor}
                            contentStyle={{
                                fontFamily: 'Bold',
                                fontSize: 14
                            }}
                            activeOutlineColor='#FFF'
                            textColor={color.onboardingPlaceholderColor}
                            onChangeText={name => setName(name)}
                            mode="outlined"
                            style={[styles.input, { marginTop: 20 }]}
                            left={
                                <TextInput.Icon
                                    disabled={true}
                                    style={{ alignItems: 'center' }}
                                    icon={() => <Image source={onBoardingIcons.account}
                                        style={{
                                            width: 13,
                                            height: 15,
                                            alignSelf: 'center',
                                            marginLeft: 5
                                        }}
                                    />} />
                            }
                        />
                        <TextInput
                            value={email}
                            outlineColor='transparent'
                            placeholder=" Email Address"
                            placeholderTextColor={color.onboardingPlaceholderColor}
                            contentStyle={{
                                fontFamily: 'Bold',
                                fontSize: 14
                            }}
                            activeOutlineColor='#FFF'
                            textColor={color.onboardingPlaceholderColor}
                            onChangeText={email => setEmail(email)}
                            mode="outlined"
                            style={[styles.input, { marginTop: 20 }]}
                            left={
                                <TextInput.Icon
                                    disabled={true}
                                    style={{ alignItems: 'center' }}
                                    icon={() => <Image source={onBoardingIcons.email}
                                        style={{
                                            width: 18,
                                            height: 13,
                                            alignSelf: 'center',
                                            marginLeft: 5
                                        }}
                                    />} />
                            }
                        />
                        <TextInput
                            value={password}
                            outlineColor='transparent'
                            placeholder=" Password"
                            placeholderTextColor={color.onboardingPlaceholderColor}
                            contentStyle={{
                                fontFamily: 'Bold',
                                fontSize: 14
                            }}
                            activeOutlineColor='#FFF'
                            textColor={color.onboardingPlaceholderColor}
                            onChangeText={password => setPassword(password)}
                            mode="outlined"
                            style={[styles.input, { marginTop: 20 }]}
                            left={
                                <TextInput.Icon
                                    disabled={true}
                                    style={{ alignItems: 'center' }}
                                    icon={() => <Image source={onBoardingIcons.password}
                                        style={{
                                            width: 16,
                                            height: 18,
                                            alignSelf: 'center',
                                            marginLeft: 5
                                        }}
                                    />} />
                            }
                        />
                        <TextInput
                            value={phone}
                            outlineColor='transparent'
                            placeholder=" Mobile Number"
                            placeholderTextColor={color.onboardingPlaceholderColor}
                            contentStyle={{
                                fontFamily: 'Bold',
                                fontSize: 14
                            }}
                            activeOutlineColor='#FFF'
                            textColor={color.onboardingPlaceholderColor}
                            onChangeText={phone => setPhone(phone)}
                            mode="outlined"
                            style={[styles.input, { marginTop: 20 }]}
                            left={
                                <TextInput.Icon
                                    disabled={true}
                                    style={{ alignItems: 'center' }}
                                    icon={() => <Image source={onBoardingIcons.phone}
                                        style={{
                                            width: 16,
                                            height: 16,
                                            alignSelf: 'center',
                                            marginLeft: 5
                                        }}
                                    />} />
                            }
                        />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => router.push('/(routes)/createaccount')}>
                        <LinearGradient
                            // Button Linear Gradient
                            start={{ x: 0.0, y: 0.0 }}
                            end={{ x: 1.0, y: 1.0 }}
                            colors={['#4dbf9b', '#69cfa7']}
                            style={styles.button}>
                            <Text style={styles.text}>SIGN UP</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={{
                        alignSelf: 'center',
                        color: color.primaryDark,
                        fontFamily: 'Regular',
                        letterSpacing: 0.38,
                        opacity: 0.4,
                        fontSize: 14,
                        marginTop: 18
                    }}>
                        OR
                    </Text>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
                        <Text
                            style={{
                                opacity: 0.4,
                                fontFamily: "Regular",
                                fontSize: 12,
                                fontWeight: "500",
                                letterSpacing: 0.38,
                                textAlign: "center",
                                color: color.primaryDark,
                            }}
                        >Already an investor?</Text>
                        <Pressable onPress={loginPress}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                fontWeight: "500",
                                letterSpacing: 0.38,
                                textAlign: "center",
                                color: color.primaryDark,
                            }}> LOGIN</Text>
                        </Pressable>
                    </View>
                </View>
            </BottomSheetView>
        </BottomSheet>
    )
}

export default SignUp