import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colorPalette } from "../../utils/palette";
import { Logo } from "../../../assets/images";

const Header = () => {
  return (
    <LinearGradient
      colors={[colorPalette.primary, colorPalette.purple.light]}
      style={styles.container}
    >
      <View style={styles.textWrapper}>
        <Text style={[styles.text, styles.greetingText]}>Welcome</Text>
        <Text style={[styles.text, styles.nameText]}>Dodi Aditya</Text>
      </View>
      <Image source={Logo} style={styles.image} />
    </LinearGradient>
  );
};

export default Header;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 80,
    height: 85,
  },
  textWrapper: {
    flex: 1,
    marginRight: 10,
    marginBottom: 15,
  },
  text: {
    color: "#fff",
  },
  greetingText: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    marginBottom: -8,
  },
  nameText: {
    fontSize: 36,
    fontFamily: "Poppins_500Medium",
  },
});
