import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const HiddenTextInput = styled.TextInput`
    position: absolute;
    border-width: 2px;
    border-radius: 8px;
    padding: 12px;
    margin-top: 15px;
    width: 1px;
    opacity: 0;
`
const OTPInputSection = styled.View`
    justify-content: center;
    align-items: center;
    margin-vertical: 30px;
    width: 100%
`

const OTPInputContainer = styled.Pressable`
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    /* background-color: '#000' */
`

const OTPInput = styled.View`
    border-color: #fff;
    min-width: 15%;
    border-width: 1px;
    border-radius: 8px;
    padding: 12px;
    background-color: #fff;
`
const OTPInputText = styled.Text`
    font-size: 20px;
    font-weight: Bold;
    text-align: center;
    color: #000;
`
const OTPInputFocused = styled(OTPInput)`
    background-color: '#b9cce7';
`



const OTPInputField = ({ setPinReady, code, setCode, maxLength }) => {

    const codeDigitsArray = new Array(maxLength).fill(0)

    const textInputRef = useRef(null)

    const [isFocused, setIsFocused] = useState(false)

    const handlePress = () => {
        setIsFocused(true);
        textInputRef?.current?.focus()
    }

    const handleOnBlur = () => {
        setIsFocused(false)
    }

    useEffect(() => {
        setPinReady(code.length === maxLength)
        return () => setPinReady(false)
    }, [code])

    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = ' ';
        const digit = code[index] || emptyInputChar;

        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;

        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

        const StyleOTPInput = isFocused && isDigitFocused ? OTPInputFocused : OTPInput;

        return (
            <StyleOTPInput key={index}>
                <OTPInputText>{digit}</OTPInputText>
            </StyleOTPInput>
        )
    }

    return (
        <>
            <OTPInputSection>
                <OTPInputContainer onPress={handlePress}>
                    {codeDigitsArray.map(toCodeDigitInput)}
                </OTPInputContainer>
                <HiddenTextInput
                    value={code}
                    onChangeText={setCode}
                    maxLength={maxLength}
                    keyboardType='number-pad'
                    textContentType='oneTimeCode'
                    ref={textInputRef}
                    onBlur={handleOnBlur}
                    enterKeyHint='done'
                />
            </OTPInputSection>
        </>
    )
}

export default OTPInputField