import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import EntIcon from "react-native-vector-icons/Entypo";
import FeaIcon from "react-native-vector-icons/Feather";
import { colorPalette } from "../../../utils/palette";

const BottomNavItem = ({ isFocused, options, onPress, onLongPress, label }) => {
  const IconWrapper = ({ children }) => {
    return <View style={styles.iconWrapper}>{children}</View>;
  };

  const Icon = () => {
    const iconPropety = {
      size: 24,
      color: isFocused ? colorPalette.text : colorPalette.disable,
    };

    const { size, color } = iconPropety;

    if (label === "Home") {
      return (
        <AntIcon name="home" size={size} focused={isFocused} color={color} />
      );
    } else if (label === "Orders") {
      return (
        <EntIcon name="list" size={size} focused={isFocused} color={color} />
      );
    } else if (label === "Account") {
      return (
        <FeaIcon name="user" size={size} focused={isFocused} color={color} />
      );
    }
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <IconWrapper>
        <Icon />
      </IconWrapper>
      {isFocused && <View style={styles.dot} />}
    </TouchableOpacity>
  );
};

export default BottomNavItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 10,
  },
  iconWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  dot: {
    width: 20,
    height: 20,
    marginTop: 4,
    marginBottom: -25,
    borderRadius: 25,
    backgroundColor: colorPalette.primary,
  },
});
