import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, Pressable, Platform } from 'react-native'
import { windowHeight, windowWidth } from "@/themes/app.constant";
import { TextInput, PaperProvider, Portal, Modal } from 'react-native-paper';
import onBoardingIcons from '../../utils/images/onBoardingIcons'
import React, { useState } from 'react'
import AuthContainer from '../../components/AuthContainer'
import createAccountIcons from '../../utils/images/createAccountIcons';
import MyCheckbox from '../../components/CheckBox';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
const CheckKYC = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: '#f3f5fc', paddingHorizontal: 10, position: 'absolute', alignSelf: 'center', bottom: 0, width: '100%' };

    const [pan, setPan] = useState('')
    const [dob, setDob] = useState('')
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
        setVisible(!visible)
    }
    const onChange = ({ type }, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate;
            setDate(currentDate)
            if (Platform.OS === 'android') {
                toggleDatePicker()
                setDob(formatDate(currentDate))
            }
        } else {
            toggleDatePicker()
        }
    }
    const confirmIOSDate = () => {
        setDob(formatDate(date))
        toggleDatePicker()
    }
    const formatDate = (rawDate) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate()

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;


        return `${day}-${month}-${year}`
    }
    return (
        <PaperProvider>

            <AuthContainer backVisible={'none'} title={'Check your KYC'}>


                <View style={styles.contentContainer}>
                    <View style={{
                        padding: 22,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={styles.meta}>Kindly fill the <Text style={{ fontFamily: 'Bold' }}>PAN</Text> and <Text style={{ fontFamily: 'Bold' }}>D.O.B</Text> to complete the KYC</Text>
                        <View style={{ width: '100%' }}>
                            <KeyboardAvoidingView>
                                <TextInput
                                    value={pan}
                                    outlineColor='transparent'
                                    placeholder=" Enter PAN Number"
                                    placeholderTextColor='#b0aec4'
                                    contentStyle={{
                                        fontFamily: 'Bold',
                                        fontSize: 14
                                    }}
                                    activeOutlineColor='#FFF'
                                    textColor='#212443'
                                    onChangeText={pan => setPan(pan)}
                                    mode="outlined"
                                    style={[styles.input, { marginTop: 20 }]}
                                // right={
                                //     <TextInput.Icon
                                //         disabled={true}
                                //         style={{ alignItems: 'center' }}
                                //         icon={() => <Image source={onBoardingIcons.email}
                                //             style={{
                                //                 width: 18,
                                //                 height: 13,
                                //                 alignSelf: 'center',
                                //                 marginLeft: 5
                                //             }}
                                //         />} />
                                // }
                                />
                                <View style={{ width: '100%' }}>
                                    <Portal>
                                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                            {showPicker && <DateTimePicker
                                                mode='date'
                                                display='spinner'
                                                value={date}
                                                onChange={onChange}
                                                style={styles.datePicker}

                                            />}
                                            {showPicker && Platform.OS === 'ios' &&
                                                (
                                                    <View
                                                        style={{ flexDirection: 'row', justifyContent: 'space-around' }}
                                                    >
                                                        <TouchableOpacity style={[styles.dateButton, styles.pickerButton,
                                                        { backgroundColor: '#11182711' }]} onPress={toggleDatePicker}>
                                                            <Text style={[styles.buttonText, { color: '#075985' }]}>Cancel</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={[styles.dateButton, styles.pickerButton]}
                                                            onPress={confirmIOSDate}>
                                                            <Text style={[styles.buttonText]}>Confirm</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )}
                                        </Modal>
                                    </Portal>


                                    {!showPicker && (
                                        <Pressable
                                            onPress={toggleDatePicker}
                                        >
                                            <TextInput
                                                value={dob}
                                                outlineColor='transparent'
                                                placeholder=" Enter Date of Birth"
                                                placeholderTextColor='#b0aec4'
                                                contentStyle={{
                                                    fontFamily: 'Bold',
                                                    fontSize: 14
                                                }}
                                                onPressIn={toggleDatePicker}
                                                editable={false}
                                                activeOutlineColor='#FFF'
                                                textColor='#212443'
                                                onChangeText={dob => setDob(dob)}
                                                mode="outlined"
                                                style={[styles.input, { marginTop: 20 }]}
                                                right={
                                                    <TextInput.Icon
                                                        disabled={true}
                                                        style={{ alignItems: 'center' }}
                                                        icon={() => <Image source={createAccountIcons.calendar}
                                                            style={{
                                                                width: 18,
                                                                height: 16,
                                                                alignSelf: 'center',
                                                                marginRight: 10
                                                            }}
                                                        />} />
                                                }
                                            />
                                        </Pressable>
                                    )}
                                </View>

                                <View style={styles.checkboxContainer}>
                                    <MyCheckbox onChange={() => setChecked(!checked)} checked={checked} />
                                    <Text style={styles.checkboxLabel}>I allow MoneyFront to check my KYC</Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={() => router.push('/(routes)/verifyOtp')}>
                                        <LinearGradient
                                            // Button Linear Gradient
                                            start={{ x: 0.0, y: 0.0 }}
                                            end={{ x: 1.0, y: 1.0 }}
                                            colors={['#4dbf9b', '#69cfa7']}
                                            style={styles.button}>
                                            <Text style={styles.text}>VERIFY KYC</Text>
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
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FFF',
        fontFamily: 'Bold',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 27
    },
    checkboxLabel: {
        marginLeft: 8,
        fontFamily: 'Regular',
        fontSize: 14,
    },
    buttonContainer: {
        width: '100%',
        marginTop: windowHeight(240),
    },
    button: {
        padding: windowHeight(15),
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Bold'
    },
    datePicker: {
        height: 200,
        marginTop: -10
    },
    dateButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#075985'
    },
    pickerButton: {
        paddingHorizontal: 20
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Bold',
        color: '#fff'
    }
})
export default CheckKYC