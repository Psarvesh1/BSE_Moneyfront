import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ImageBackground } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-paper';
import onBoardingIcons from '../../utils/images/onBoardingIcons'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './login.styles';
import color from '@/themes/app.colors';
import Images from '@/utils/images';
import showError from '../../utils/helperFunctions/toastMessage'
import FlashMessage from 'react-native-flash-message';
import { router } from 'expo-router';
import { windowHeight } from '@/themes/app.constant';
import AuthContainer from '../../components/AuthContainer'

const SignIn = () => {
    const snapPoints = useMemo(() => ['85%', '85%'], []);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true);
    const [errors, setErrors] = useState({});

    const isObjectEmpty = (objectName) => {
        return (
            objectName &&
            Object.keys(objectName).length === 0 &&
            objectName.constructor === Object
        );
    };
    const loginPress = () => {
        // validateForm()

    }
    const validateForm = async () => {
        let isValid;
        let errors = {};
        const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/
        // Validate email field 
        if (!email) {
            errors.email = 'Email is required!';
            showError(errors.email)
            console.log(errors.email)
            // setEmail(errors.email)
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid!';
            showError(errors.email)
            // setEmail(errors.email)
        }
        else if (!password) {
            errors.password = 'Password is required!';
            showError(errors.password)
            // setPassword(errors.password)
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
            showError(errors.password)
            // setPassword(errors.password) 
        } else {
            setErrors(errors);
            console.log(errors)
            if (isObjectEmpty(errors)) {
                setIsFormValid(false)
                console.log('valid')
                isValid = true
                return isValid
            } else {
                setIsFormValid(true)
                console.log('valid')
                isValid = false
                return isValid
            }
        }
    };
    return (
        <AuthContainer onPress={() => router.back()}>
            <FlashMessage 
          position={'top'}
        />
            <BottomSheet
                index={1}
                snapPoints={snapPoints}
                backgroundStyle={{
                    backgroundColor: '#f3f5fc',
                }}
                handleIndicatorStyle={{
                    backgroundColor: '#d4dbe7'
                }}
                enablePanDownToClose={false}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.header}>Login</Text>
                    <View style={styles.inputContainer}>
                        <KeyboardAvoidingView>
                            <TextInput
                                value={email}
                                outlineColor='transparent'
                                placeholder=" Email"
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
                                right={
                                    showPassword ?
                                        <TextInput.Icon
                                            style={{
                                                alignItems: 'center', marginVertical: 0,
                                                paddingVertical: 0
                                            }}
                                            icon={() => <Image source={onBoardingIcons.show}
                                                style={{
                                                    width: 16,
                                                    height: 12,
                                                    alignSelf: 'center',
                                                    margin: 0,
                                                    padding: 0,
                                                    marginVertical: 0,
                                                    paddingVertical: 0
                                                }}
                                            />}
                                            onPress={() => setShowPassword(!showPassword)}
                                        />
                                        :
                                        <TextInput.Icon
                                            style={{
                                                alignItems: 'center', margin: 0,
                                                marginVertical: 0,
                                                paddingVertical: 0
                                            }}
                                            icon={() => <Image source={onBoardingIcons.hide}
                                                style={{
                                                    width: 16,
                                                    height: 9,
                                                    alignSelf: 'center',
                                                    margin: 0,
                                                    padding: 0,
                                                    marginVertical: 0,
                                                    paddingVertical: 0
                                                }}
                                            />}
                                            onPress={() => setShowPassword(!showPassword)}
                                        />
                                }
                            />
                            <Text style={styles.forgot}>Forgot Password?</Text>
                        </KeyboardAvoidingView>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={loginPress}>
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
                            >New here?</Text>
                            <Pressable onPress={() => router.push('/(routes)/onboarding')}>
                                <Text style={{
                                    fontFamily: "Bold",
                                    fontSize: 12,
                                    fontWeight: "500",
                                    letterSpacing: 0.38,
                                    textAlign: "center",
                                    color: color.primaryDark,
                                }}> SIGN UP</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </BottomSheet>
        </AuthContainer>
    )
}

export default SignIn