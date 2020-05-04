import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/loading.gif")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default Loading;
