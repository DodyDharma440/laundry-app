import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LayananItem = ({ layanan }) => {
  const { label, icon } = layanan;

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default LayananItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    elevation: 4,
    margin: 8,
    borderRadius: 16,
    minHeight: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    marginBottom: 10,
  },
  label: {
    fontFamily: "Poppins_400Regular",
  },
});
