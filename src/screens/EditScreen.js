import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { Context } from "../context/NoteContext";
import Form from "../components/Form";

const EditScreen = ({
  route: {
    params: { id },
  },
  navigation,
}) => {
  const { state, updateNote } = useContext(Context);
  const note = state.find((note) => note.id === id);

  const submit = (title, content) => {
    updateNote({ id, title, content }, () => {
      navigation.navigate("Note", { id });
    });
  };

  return (
    <View style={styles.container}>
      <Form
        labelOne="Enter new title"
        labelTwo="Enter new Note"
        handleSubmit={submit}
        btnText="save"
        initialInputOne={note.title}
        initialInputTwo={note.content}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default EditScreen;
