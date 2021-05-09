import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colorPalette } from "../../utils/palette";
import IconFa5 from "react-native-vector-icons/FontAwesome5";

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldoContainer}>
        <View style={styles.textGroup}>
          <Text style={styles.textLabel}>Saldo : </Text>
          <Text style={styles.textValue}>Rp. 120.000</Text>
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.textLabel}>Antar Point : </Text>
          <Text
            style={[
              styles.textValue,
              styles.textPoint,
              { color: colorPalette.primary },
            ]}
          >
            50 Points
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonWrapper}>
          <View style={[styles.button, { backgroundColor: "#0ebf00" }]}>
            <IconFa5 color="#043600" size={20} name="money-bill" />
          </View>
          <Text style={styles.buttonLabel}>Tambah Saldo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper}>
          <View style={[styles.button, { backgroundColor: "#fff721" }]}>
            <IconFa5 color="#918c00" size={20} name="coins" />
          </View>
          <Text style={styles.buttonLabel}>Cari Point</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Saldo;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 16,
    transform: [
      {
        translateY: height * -0.04,
      },
    ],
    elevation: 5,
  },
  saldoContainer: {
    display: "flex",
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  textGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  textLabel: {
    fontFamily: "Poppins_400Regular",
    color: colorPalette.text,
    fontSize: 12,
  },
  textValue: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    color: colorPalette.text,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonWrapper: {
    width: 50,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: "#eee",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 4,
    padding: 5,
    borderRadius: 999,
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    fontSize: 10,
  },
});
