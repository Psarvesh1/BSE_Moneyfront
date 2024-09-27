import color from "@/themes/app.colors";
import { windowHeight } from "@/themes/app.constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  activeStyle: {
    width: "7%",
    backgroundColor: color.white,
    height: 4,
  },
  paginationStyle: {
    height: "25%",
  },
  slideContainer: {
    backgroundColor: "#FFF",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  image: {
    resizeMode: "contain",
    // height: windowHeight(300),
    // width: "80%",
    alignSelf: "center",
    // position: 'absolute',
    marginTop: windowHeight(56),
  },
  button: {
    padding: windowHeight(15),
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontFamily: "Bold",
    fontSize: 14,
    letterSpacing: 0.44,
    textAlign: "center",
    color: color.white,
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    paddingLeft: windowHeight(25),
    paddingRight: windowHeight(25),
    marginTop: windowHeight(500),
  },
  headerContainer: {
    
    paddingLeft: windowHeight(25),
    paddingRight: windowHeight(25),
  },
  title: {
    fontSize: 20,
    letterSpacing: 0.63,
    fontFamily: "Regular",
    textAlign: "left",
  },
  highlightText: {
    fontFamily: "Bold",
    textAlign: "left",
    left: 4,
    letterSpacing: 0.63
  },
  description: {
    opacity: 0.5,
    fontFamily: "Regular",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.38,
    marginTop: windowHeight(5),
    textAlign: "left",
  },
});
export { styles };
