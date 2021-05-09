import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";

const PesananItem = ({ pesanan }) => {
  const { nomor, status } = pesanan;
  const [iconAttr, setIconAttr] = useState({
    name: "",
    color: "",
  });

  const makeIconName = () => {
    switch (status) {
      case "Sudah Dicuci":
        setIconAttr({
          name: "checkcircleo",
          color: "#37bc64",
        });
        break;
      case "Belum Dicuci":
        setIconAttr({
          name: "closecircleo",
          color: "#de5050",
        });
        break;
      case "Masih Dicuci":
        setIconAttr({
          name: "exclamationcircleo",
          color: "#f9ae3f",
        });
        break;
      default:
        setIconAttr({
          name: "",
          color: "",
        });
        break;
    }
  };

  useEffect(() => {
    makeIconName();

    return () => {
      setIconAttr({});
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <View style={styles.orderNumberWrapper}>
          <Text style={styles.orderLabel}>Pesanan </Text>
          <Text style={styles.orderNumber}>{nomor}</Text>
        </View>
        <Text style={styles.label}>{status}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <IconAnt name={iconAttr.name} color={iconAttr.color} size={30} />
      </View>
    </View>
  );
};

export default PesananItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 18,
    borderRadius: 16,
    elevation: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    paddingVertical: 16,
    paddingRight: 16,
  },
  textWrapper: {
    flex: 1,
    padding: 16,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
  },
  orderNumberWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  orderLabel: {
    fontFamily: "Poppins_400Regular",
    color: "#555",
  },
  orderNumber: {
    fontFamily: "Poppins_700Bold",
  },
});
