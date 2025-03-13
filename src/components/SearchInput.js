import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SearchInput = ({
  searchText,
  setSearchText,
  filters,
  removeFilter,
  clearFilters,
  handleKeyDown,
}) => {
  return (
    <View style={styles.container}>
      {/* Filters Section */}
        {filters.map((filter, index) => (
          <View key={index} style={styles.filterTag}>
            <Text style={styles.filterText}>{filter}</Text>
            <TouchableOpacity onPress={() => removeFilter(filter)} style={styles.removeButton}>
              <Text style={styles.removeIcon}>x</Text>
            </TouchableOpacity>
          </View>
        ))}

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#5C6F71"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleKeyDown}
        returnKeyType="search"
      />

      {/* Clear Button */}
      {filters.length > 0 && (
        <TouchableOpacity onPress={clearFilters}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  filterTag: {
    backgroundColor: "#EFFAFA",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  filterText: {
    color: "#2C3A3A",
    fontWeight: "bold",
    marginRight: 4,
  },
  removeButton: {
    backgroundColor: "transparent",
    borderRadius: 4,
    padding: 4,
  },
  removeIcon: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: 12,
    height: 12,
    fontWeight: "bold",
    color: "#2C3A3A",
  },
  input: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: "#2C3A3A",
    fontWeight: "bold",
  },
  clearText: {
    color: "#7C8F91",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
