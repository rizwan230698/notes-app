import React, { useContext } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import { Context } from "../context/NoteContext";
import Note from "../components/Note";
import ButtonIcon from "../components/ButtonIcon";

const IndexScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Note", { id: item.id })}
          >
            <Note item={item} />
          </TouchableOpacity>
        )}
      />
      <ButtonIcon
        iconName="plus"
        onPress={() => navigation.navigate("Create")}
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

export default IndexScreen;
