import React, { useCallback, useMemo, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignUp from "../signup/signup.screen";
import color from "@/themes/app.colors";
import Swiper from "react-native-swiper";
import { styles } from "./styles";
import { slides } from "@/configs/constant";
import Images from "@/utils/images";
import { LinearGradient } from "expo-linear-gradient";
import { fontSizes } from "@/themes/app.constant";
import SignIn from "../signup/login.screen";
import { router } from "expo-router";
const OnBoardingScreen = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  // renders
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.imageBackground}
          source={Images.onboardingHomeBg}
        >
          <Swiper
            activeDotStyle={styles.activeStyle}
            removeClippedSubviews={true}
            paginationStyle={styles.paginationStyle}
            dotStyle={{
              height: 4,
            }}
            //   autoplay={true}
          >
            {slides.map((slide, index) => (
              <SafeAreaView
                style={{ flex: 1, marginTop: StatusBar.currentHeight + 20 }}
              >
                <View style={styles.headerContainer}>
                  <Text style={{ width: "60%" }}>
                    <Text style={styles.title}>{slide.text}</Text>
                    <Text style={[styles.title, styles.highlightText]}>
                      {slide.highlightedText}
                    </Text>
                  </Text>
                  <View style={{ width: "80%" }}>
                    <Text style={styles.description}>{slide.description}</Text>
                  </View>
                </View>
                <Image
                  source={slide.image}
                  style={[styles.image, slide.size]}
                />
              </SafeAreaView>
            ))}
          </Swiper>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => router.push("/(routes)/signIn/Index")}>
              <LinearGradient
                // Button Linear Gradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={["#4dbf9b", "#69cfa7"]}
                style={styles.button}
              >
                <Text style={styles.text}>LOG IN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <SignUp/>
      </>
  );
};

export default OnBoardingScreen;
