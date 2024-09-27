import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, Pressable, Platform, Keyboard } from 'react-native'
import { windowHeight, windowWidth } from "@/themes/app.constant";
import { TextInput, PaperProvider, Portal, Modal } from 'react-native-paper';
import onBoardingIcons from '../../utils/images/onBoardingIcons'
import React, { useState } from 'react'
import AuthContainer from '../../components/AuthContainer'
import createAccountIcons from '../../utils/images/createAccountIcons';
import MyCheckbox from '../../components/CheckBox';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import OTPInputField from '../../components/OTPInput';
import { router } from 'expo-router';

const VerifyOTP = () => {
    const [code, setCode] = useState('')
    const [pinReady, setPinReady] = useState(false)
    const MAX_CODE_lENGTH = 4;
    const primary = ['#4dbf9b', '#69cfa7']
    const secondary = ['#b9cce7', '#b9cce7']
    return (
        <PaperProvider>
            <AuthContainer backVisible={'none'} title={'Personal Details'}>
                <View style={styles.contentContainer}>
                    <View style={{
                        padding: 22,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={styles.meta}>
                            Kindly fill your
                            <Text style={{ fontFamily: 'Bold' }}>  Mother’s name.</Text>
                            and
                            <Text style={{ fontFamily: 'Bold' }}> Nomination details</Text>
                        </Text>
                        <View style={{ width: '100%' }}>
                            <KeyboardAvoidingView>
                                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                                    <Image source={onBoardingIcons.email} style={{ height: 14, width: 20, alignSelf: 'center' }} />
                                    <Text style={{ fontFamily: 'Regular', color: "#c3c1d7", fontSize: 14, marginLeft: 10, letterSpacing: 0.38 }}>Email Address</Text>
                                    <Text style={{ fontFamily: 'Bold', letterSpacing: 0.44, color: '#212443', fontSize: 14, marginLeft: 20 }}>amol.kumar@yahoo.com</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                                    <Image source={onBoardingIcons.phone} style={{ height: 16, width: 16, alignSelf: 'center' }} />
                                    <Text style={{ fontFamily: 'Regular', color: "#c3c1d7", fontSize: 14, marginLeft: 10, letterSpacing: 0.38 }}>Mobile Number</Text>
                                    <Text style={{ fontFamily: 'Bold', letterSpacing: 0.44, color: '#212443', fontSize: 14, marginLeft: 20 }}>9876543210</Text>
                                </View>
                                <View style={{ marginTop: 50 }}>
                                    <Pressable onPress={Keyboard.dismiss} style={{ width: '100%' }}>
                                        <OTPInputField
                                            setPinReady={setPinReady}
                                            code={code}
                                            setCode={setCode}
                                            maxLength={MAX_CODE_lENGTH}
                                        />
                                    </Pressable>
                                    <Text style={{
                                        fontSize: 12,
                                        fontFamily: "Bold",
                                        letterSpacing: 0.38,
                                        textAlign: "center",
                                        color: "#567bf5"
                                    }}>RESEND</Text>
                                </View>

                                <View style={{ marginTop: 230 }}>
                                    <TouchableOpacity onPress={() => router.push('/(routes)/nomineeDetail')} disabled={!pinReady}>
                                        <LinearGradient
                                            // Button Linear Gradient
                                            start={{ x: 0.0, y: 0.0 }}
                                            end={{ x: 1.0, y: 1.0 }}
                                            colors={!pinReady ? secondary : primary}
                                            style={styles.button}>
                                            <Text style={styles.buttonText}>Verify OTP</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>

                        </View>
                    </View>
                </View>
            </AuthContainer>
        </PaperProvider>

    )
}
const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: '#f3f5fc',
        flex: 1,
        borderTopLeftRadius: 60,
        position: 'absolute',
        marginTop: 120,
        width: '100%',
        height: '200%'
    },
    meta: {
        fontFamily: 'Regular',
        letterSpacing: 0.38,
        color: '#212443',
        opacity: 0.4,
        // fontSize: windowHeight(12),
        marginTop: 20
    },
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#075985'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Bold',
        color: '#fff'
    }
})
export default VerifyOTP