import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Context } from "../context/NoteContext";
import ButtonIcon from "../components/ButtonIcon";
import ConfirmModal from "../components/ConfirmModal";
import Loading from "../components/Loading";

const ShowScreen = ({
  route: {
    params: { id },
  },
  navigation,
}) => {
  const [modal, setModal] = useState(false);
  const { state, deleteNote } = useContext(Context);
  const note = state.find((note) => note.id === id);
  if (!note) {
    return <Loading />;
  }
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{note.title}</Text>
          <Text style={styles.content}>{note.content}</Text>
        </ScrollView>
        <ButtonIcon
          iconName="edit"
          bottom={100}
          onPress={() => navigation.navigate("Edit", { id: note.id })}
        />
        <ButtonIcon iconName="delete" onPress={() => setModal(true)} />
      </View>
      <ConfirmModal
        visible={modal}
        onCancel={() => setModal(false)}
        onPress={() =>
          deleteNote(note.id, () => {
            navigation.navigate("Notes");
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Raleway-Medium",
    fontSize: 25,
    color: "rgba(0,0,0,0.8)",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 18,
  },
  content: {
    fontFamily: "Raleway-Regular",
    fontSize: 15,
    color: "rgba(0,0,0,0.8)",
    marginHorizontal: 10,
    marginBottom: 15,
    lineHeight: 18,
  },
});

export default ShowScreen;
