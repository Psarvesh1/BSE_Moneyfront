import { ImageSourcePropType } from "react-native";

export type images = {
  onboardingHomeBg: ImageSourcePropType;
  onBoardingPiggy: ImageSourcePropType;
  onBoardingHandshake: ImageSourcePropType;
  onBoardingAdvisory: ImageSourcePropType;
  onBoardingModalBg: ImageSourcePropType;
};

const Images: images = {
  onboardingHomeBg: require("../../assets/images/onBoarding/onBoardingBg.png"),
  onBoardingPiggy: require("../../assets/images/onBoarding/onBoardingPiggy.png"),
  onBoardingHandshake: require("../../assets/images/onBoarding/onboardingHandshake.png"),
  onBoardingAdvisory: require("../../assets/images/onBoarding/onboardingAdvisory.png"),
  onBoardingModalBg: require("../../assets/images/onBoarding/onboardingModalBg.png"),
};
export default Images;
