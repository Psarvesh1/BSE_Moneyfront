import React, { useMemo, useState } from 'react'
import AuthContainer from '../../components/AuthContainer'
import BottomSheet from '@gorhom/bottom-sheet';
import { Image, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { windowHeight, windowWidth } from "@/themes/app.constant";
import createAccountIcons from '../../utils/images/createAccountIcons';
import { router } from 'expo-router';
const CreateAccount = () => {
    const snapPoints = useMemo(() => ['85%', '85%'], []);
    const [userOption, setUserOption] = useState('individual')
    const selectOption = (option) => {
        setUserOption(option)
    }
    return (
        <AuthContainer>
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
                    <Text style={styles.header}>Create Account</Text>
                    <Text style={styles.meta}>Choose the account type to start investing with MoneyFront</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.optionContainer} onPress={() => selectOption('individual')}>
                            <View style={styles.option}>
                                {userOption === 'individual' ?
                                    <View style={styles.selected}>
                                        <Image source={createAccountIcons.done} style={styles.done} />
                                    </View> : null}
                                <Text style={[styles.optionTitle, userOption === 'individual' ? styles.optionTitleSelected : styles.optionTitleNotSelected]}>
                                    Open an Investment Account
                                </Text>
                                {userOption === 'individual' ? <Image source={createAccountIcons.individual} style={styles.accountIconType} /> : <Image source={createAccountIcons.notIndividual} style={styles.accountIconType} />}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionContainer} onPress={() => selectOption('minor')}>
                            <View style={styles.option}>
                                {userOption === 'minor' ?
                                    <View style={styles.selected}>
                                        <Image source={createAccountIcons.done} style={styles.done} />
                                    </View> : null}
                                <Text style={[styles.optionTitle, userOption === 'minor' ? styles.optionTitleSelected : styles.optionTitleNotSelected]}>
                                    Open a Minor Account
                                </Text>
                                {userOption === 'minor' ? <Image source={createAccountIcons.individual} style={[styles.accountIconType, { height: 56, width: 63 }]} /> : <Image source={createAccountIcons.notIndividual} style={[styles.accountIconType, { height: 56, width: 63 }]} />}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.optionContainer} onPress={() => selectOption('nonIndividual')}>
                            <View style={styles.option}>
                                {userOption === 'nonIndividual' ?
                                    <View style={styles.selected}>
                                        <Image source={createAccountIcons.done} style={styles.done} />
                                    </View> : null}
                                <Text style={[styles.optionTitle, userOption === 'nonIndividual' ? styles.optionTitleSelected : styles.optionTitleNotSelected, { width: 80 }]}>
                                    Open a
                                    Non-Individual Account
                                </Text>
                                {userOption === 'nonIndividual' ? <Image source={createAccountIcons.notNonIndividual} style={[styles.accountIconType, { height: 66, width: 117 }]} /> : <Image source={createAccountIcons.nonIndividual} style={[styles.accountIconType, { height: 66, width: 117 }]} />}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => router.push('/(routes)/checkKyc')}>
                            <LinearGradient
                                // Button Linear Gradient
                                start={{ x: 0.0, y: 0.0 }}
                                end={{ x: 1.0, y: 1.0 }}
                                colors={['#4dbf9b', '#69cfa7']}
                                style={styles.button}>
                                <Text style={styles.text}>CONTINUE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
                            <Pressable onPress={() => router.push('/(routes)/onboarding')}>
                                <Text><Text style={{ color: '#c3c1d7' }}>{'>> '}</Text><Text style={{
                                    fontFamily: "Bold",
                                    fontSize: 14,
                                    // fontWeight: "500",
                                    letterSpacing: 0.38,
                                    textAlign: "center",

                                }}> I will do it Later</Text><Text style={{ color: '#c3c1d7' }}>{'  >>'}</Text></Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </BottomSheet>
        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        fontFamily: 'SemiBold',
        fontSize: windowWidth(22),
        // fontWeight: 800,
        height: 25,
        fontStyle: "normal",
        letterSpacing: 0.63,
        textAlign: "center",
        color: '#212443',
        marginTop: windowHeight(10)
    },
    meta: {
        marginTop: 10,
        fontFamily: 'Regular',
        fontSize: windowWidth(16),
        letterSpacing: 0.38,
        textAlign: 'center',
        color: '#212443',
        opacity: 0.4,
        width: 216
    },
    optionContainer: {
        padding: 10,
        marginTop: 20,
        flexDirection: 'row'
    },
    option: {
        width: 150,
        height: 150,
        borderRadius: 8,
        backgroundColor: "#ffffff",
    },
    optionTitle: {
        fontFamily: 'Bold',
        fontSize: windowWidth(16),
        letterSpacing: 0.44,
        marginTop: 17,
        marginLeft: 15,
        marginRight: 45,
        marginBottom: 47,
        position: 'absolute',
        color: "#c3c1d7",
        width: 80
    },
    optionTitleNotSelected: {
        color: "#c3c1d7"
    },
    optionTitleSelected: {
        color: '#597ffc',
    },
    selected: {
        width: 44,
        height: 44,
        backgroundColor: "#5179fe",
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    done: {
        width: 14,
        height: 14,
        marginBottom: 5,
        marginLeft: 5
    },
    accountIconType: {
        width: 77,
        height: 66,
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: windowHeight(25),
        paddingRight: windowHeight(25),
        marginTop: windowHeight(60),
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
    arrow: {
        width: 8,
        height: 4,
        transform: "rotate(-270deg)",
        opacity: 0.3,
        backgroundColor: "#212443",
        borderStyle: "solid",
        borderWidth: 0.6,
        borderColor: "#212443"
    }
})

export default CreateAccount;