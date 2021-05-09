import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header, Saldo, Layanan, Pesanan } from "../../components";

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header />
        <Saldo />
        <Layanan />
        <Pesanan />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
