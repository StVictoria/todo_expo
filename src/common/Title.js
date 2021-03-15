import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}