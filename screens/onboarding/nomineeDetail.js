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
import Toast from 'react-native-toast-message';
import { Button } from 'react-native';

const NomineeDetail = () => {
    const [code, setCode] = useState('')
    const [pinReady, setPinReady] = useState(false)
    const MAX_CODE_lENGTH = 4;
    const primary = ['#4dbf9b', '#69cfa7']
    const secondary = ['#b9cce7', '#b9cce7']
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'loda de lahsan',
            autoHide: false,
            swipeable: true
        });
    };

    return (
        <PaperProvider>
            <AuthContainer backVisible={'none'} title={'Personal Details'}>
                <View style={styles.contentContainer}>
                    {/* <Toast /> */}
                    <View style={styles.notificationContainer}>
                        <Text style={styles.notificationMessage}>
                            <Text style={{ fontFamily: 'Bold' }}>Amol! </Text>
                            You are a KYC verified user
                        </Text>
                        <View style={{
                            opacity: 0.38,
                            backgroundColor: '#fff',
                            padding: 10,
                            borderRadius: 30,
                            alignSelf: 'flex-end'
                        }}>
                            <Image source={createAccountIcons.cross} style={{ height: 10, width: 10 }} />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.meta}>
                            Kindly fill your
                            <Text style={{ fontFamily: 'Bold' }}>  Mother’s name </Text>
                            and
                            <Text style={{ fontFamily: 'Bold' }}> Nomination details</Text>
                        </Text>
                        <View style={{ width: '100%' }}>
                            <KeyboardAvoidingView>

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
        height: '200%',
        paddingHorizontal: 16,
        alignItems: 'center'
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
    },
    notificationContainer: {
        borderRadius: 30,
        width: '95%',
        backgroundColor: '#e1eff1',
        marginTop: 35,
        alignSelf: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    notificationMessage: {
        fontFamily: 'Regular',
        fontSize: 16,
        letterSpacing: 0.44,
        color: '#46b894',
    }
})
export default NomineeDetail