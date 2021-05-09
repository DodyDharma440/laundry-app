import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
import LayananItem from "./LayananItem/LayananItem";
import { dataLayanan } from "../../data/layananData";

const Layanan = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Layanan Kami</Text>
      <FlatList
        data={dataLayanan}
        renderItem={({ item }) => <LayananItem layanan={item} />}
        numColumns={dataLayanan.length % 2 === 0 ? dataLayanan.length / 2 : 3}
        keyExtractor={(item, index) => `${item.label}-${index}`}
      />
    </SafeAreaView>
  );
};

export default Layanan;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: height * -0.04,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
});
