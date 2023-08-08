import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default function DayList() {
  const days = [16, 17, 18, 19, 20, 21, 22, 23];
  const lastIndexToLoad = 5;
  const [arrowClicked, setArrowClicked] = useState(false);

  function expandAll() {
    setArrowClicked(true);
  }

  function ListItem({ data }) {
    const iconLoadedRef = useRef(false);
    if (!iconLoadedRef.current && data.index > lastIndexToLoad) {
      iconLoadedRef.current = true;
    }

    return data.index < lastIndexToLoad ? (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>F</Text>
        <Text style={styles.itemText}>{data.item}</Text>
      </View>
    ) : iconLoadedRef.current || arrowClicked ? (
      arrowClicked ? (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>F</Text>
          <Text style={styles.itemText}>{data.item}</Text>
        </View>
      ) : null
    ) : (
      <Pressable style={styles.icon} onPress={expandAll}>
        <Entypo name="chevron-right" size={32} color="#7b7b7b" />
      </Pressable>
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <FlatList
        data={days}
        keyExtractor={(item) => item}
        renderItem={(data) => <ListItem data={data} />}
        numColumns={10}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  itemContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 15,
    marginRight: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },

  itemText: {
    fontSize: 12,
    fontWeight: "bold",
  },

  icon: {
    justifyContent: "center",
  },
});
