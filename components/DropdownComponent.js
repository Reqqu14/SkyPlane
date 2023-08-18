import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";

const DropdownComponent = ({ dropdownValue, setDropdownValue, invalid }) => {
  const [isFocus, setIsFocus] = useState(false);
  const airports = useSelector((state) => {
    return state.airportData.airports;
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        Airport
      </Text>
      <Dropdown
        style={[styles.dropdown, invalid && styles.invalidInput]}
        placeholderStyle={[
          styles.placeholderStyle,
          invalid && styles.invalidLabel,
        ]}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={airports}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select Your airport" : "..."}
        value={dropdownValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setDropdownValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
    color: "#7b7b7b",
    marginBottom: 4,
  },
  dropdown: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#f9f3f3",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  invalidLabel: {
    color: "red",
  },

  invalidInput: {
    backgroundColor: "#efd7dc",
  },
});
