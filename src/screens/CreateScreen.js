import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { Context } from "../context/NoteContext";
import Form from "../components/Form";

const CreateScreen = ({ navigation }) => {
  const { addNote } = useContext(Context);

  const submit = (title, content) => {
    addNote({ title, content }, () => {
      navigation.navigate("Notes");
    });
  };

  return (
    <View style={styles.container}>
      <Form
        handleSubmit={submit}
        labelOne="Enter a title"
        labelTwo="Enter a note"
        btnText="save"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "#fff",
  },
});

export default CreateScreen;
