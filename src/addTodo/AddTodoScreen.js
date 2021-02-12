import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import Button from "../common/Button";

const fields = [
  {
    id: 1,
    name: "task",
    title: "Что необходимо сделать?",
    placeholder: "Например, прочитать книгу",
  },
  { id: 2, name: "amount", title: "Награда", placeholder: "800" },
  { id: 3, name: "deadline", title: "Дедлайн", placeholder: "20.02.2021" },
  {
    id: 4,
    name: "notice",
    title: "Примечание",
    placeholder: "",
  },
];

export default function AddTodo({ userValues, onSetUserValues, onSubmit }) {
  const renderTextFields = () =>
    fields.map((field) => (
      <>
        <Text style={styles.label}>{field.title}</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          textAlign="center"
          placeholder={field.placeholder}
          value={userValues[field.name]}
          onChange={({ nativeEvent }) =>
            onSetUserValues(nativeEvent.text, field)
          }
          style={styles.textInput}
        />
      </>
    ));
  return (
    <View style={styles.addTodoBlock}>
      {renderTextFields()}
      <Button
        name="Добавить"
        color="#37AC0A"
        userValues={userValues}
        onClick={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  fieldContainer: {
    width: "100%",
  },
  label: {
    marginBottom: 5,
  },
  textInput: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 50,
  },
});