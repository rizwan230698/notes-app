import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Note = ({ item }) => (
  <View style={styles.noteView}>
    <Text style={styles.noteText}>{item.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  noteView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopColor: "#f9f9f9",
    borderTopWidth: 1,
  },
  noteText: {
    fontFamily: "Raleway-Medium",
    fontSize: 18,
    color: "rgba(0,0,0,0.8)",
  },
});

export default Note;
