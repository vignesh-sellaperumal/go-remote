import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ value, onChange, onSubmit, placeholder, containerStyle = {} }) => {
  return (
    <View style={{ ...styles.background, ...containerStyle }}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        value={value}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 5,
    marginTop: 14,
    flexDirection: "row",
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 15,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
