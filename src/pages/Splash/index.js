import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Logo } from "../../../assets/images";
import { colorPalette } from "../../utils/palette";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainApp");
    }, 3000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[colorPalette.primary, colorPalette.secondary]}
      style={styles.container}
    >
      <Image source={Logo} style={styles.image} />
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 215,
  },
});
