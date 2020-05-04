import React, { useState } from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

const Form = ({
  labelOne,
  labelTwo,
  btnText,
  handleSubmit,
  initialInputOne = "",
  initialInputTwo = "",
}) => {
  const [title, setTitle] = useState(initialInputOne);
  const [content, setContent] = useState(initialInputTwo);

  const submit = () => {
    if (title.trim() === "" || content.trim() === "") {
      Alert.alert("Please provide a valid title and note.");
      return;
    }
    handleSubmit(title.trim(), content.trim());
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.label}>{labelOne}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styles.label}>{labelTwo}</Text>
      <TextInput
        style={styles.input}
        value={content}
        multiline={true}
        numberOfLines={6}
        textAlignVertical="top"
        onChangeText={(content) => setContent(content)}
      />
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    fontFamily: "Raleway-Regular",
    borderColor: "rgba(0,0,0,0.9)",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
    fontSize: 16,
    color: "rgba(0,0,0,0.8)",
    marginHorizontal: 20,
  },
  label: {
    fontFamily: "Raleway-Bold",
    textAlign: "center",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 7,
    zIndex: 10,
    fontSize: 12,
    transform: [{ translateX: 35 }, { translateY: 8 }],
    color: "rgba(0,0,0,0.9)",
  },
  button: {
    marginTop: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#FF3366",
    paddingVertical: 9,
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontFamily: "Raleway-Regular",
    color: "#fff",
  },
});

export default Form;
