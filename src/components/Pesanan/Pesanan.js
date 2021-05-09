import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { dataPesanan } from "../../data/pesananData";
import PesananItem from "./PesananItem/PesananItem";

const Pesanan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Pesanan</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
          <Text style={styles.moreLink}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      {dataPesanan.slice(0, 5).map((data) => (
        <PesananItem key={`${data.id}-${data.status}`} pesanan={data} />
      ))}
    </View>
  );
};

export default Pesanan;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: height * -0.04,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    flex: 1,
    fontSize: 20,
  },
  moreLink: {
    fontFamily: "Poppins_500Medium",
    color: "#666",
  },
});
