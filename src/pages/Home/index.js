import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Header, Saldo } from "../../components";

const Home = () => {
  return (
    <View style={styles.page}>
      <Header />
      <Saldo />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
