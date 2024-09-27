import { View, Image, Pressable, Text } from 'react-native';
import onBoardingIcons from '@/utils/images/onBoardingIcons';
import Images from '@/utils/images';
import { windowHeight } from '@/themes/app.constant';
import { router } from 'expo-router';

const AuthContainer = ({ children, onPress, backVisible, title }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', marginTop: windowHeight(-120) }}>
                <Image source={Images.onBoardingModalBg} style={{ width: '100%', aspectRatio: 0.8, height: undefined }} resizeMode='contain' />
            </View>
            <Pressable style={{ position: 'absolute', top: windowHeight(50), left: windowHeight(30), display: backVisible }} onPress={() => router.back()}>
                <Image source={onBoardingIcons.back} style={{ height: 30, width: 30 }} />
            </Pressable>
            <Text style={{ position: 'absolute', top: windowHeight(50), left: windowHeight(30), color: '#f7f9fd', fontFamily: 'Bold', fontSize: 20 }}>{title}</Text>
            {children}
        </View>
    )
}

export default AuthContainer

