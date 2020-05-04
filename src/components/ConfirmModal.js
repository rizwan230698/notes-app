import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ConfirmModal = ({ visible, onPress, onCancel }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
            Are you sure you want to delete this note?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    // paddingHorizontal: 15,
  },
  innerContainer: {
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  text: {
    color: "rgba(0,0,0,0.8)",
    fontSize: 18,
    fontFamily: "Raleway-Medium",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 9,
    paddingHorizontal: 8,
    alignItems: "center",
    borderRadius: 4,
    marginLeft: 15,
  },
  buttonText: {
    fontFamily: "Raleway-Regular",
    color: "#fff",
  },
});

export default ConfirmModal;
