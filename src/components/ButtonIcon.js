import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ButtonIcon = ({ iconName, onPress, bottom }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.iconContainer, bottom: bottom ? bottom : 20 }}
      onPress={onPress}
    >
      <AntDesign name={iconName} style={styles.icon} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    right: 20,
    borderRadius: 100,
    padding: 20,
    backgroundColor: "#FF3366",
    shadowColor: "rgba(0,0,0, .5)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  icon: {
    fontSize: 30,
    color: "#fff",
  },
});

export default ButtonIcon;
