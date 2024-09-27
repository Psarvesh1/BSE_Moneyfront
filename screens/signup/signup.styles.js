import { windowHeight, windowWidth } from "@/themes/app.constant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: windowHeight(24),
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    inputContainer: {
      width: '100%',
      paddingLeft: windowHeight(25),
      paddingRight: windowHeight(25)
    },
    header: {
      fontFamily: 'Bold',
      fontSize: windowWidth(20),
      fontWeight: "600",
      fontStyle: "normal",
      letterSpacing: 0.63,
      textAlign: "center",
      color: '#212443',
      marginTop: windowHeight(10)
    },
    input: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#FFF',
      fontFamily: 'Bold'
    },
    button: {
      padding: windowHeight(15),
      alignItems: 'center',
      borderRadius: 5,
      borderRadius: 8
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
      fontFamily: 'Bold'
    },
    buttonContainer: {
      width: '100%',
      paddingLeft: windowHeight(25),
      paddingRight: windowHeight(25),
      marginTop: windowHeight(55),
    }
  });

export {styles}