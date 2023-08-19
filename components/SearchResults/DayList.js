import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { current } from "@reduxjs/toolkit";

export default function DayList({ setSelectedDay }) {
  const lastIndexToLoad = 5;
  const [arrowClicked, setArrowClicked] = useState(false);
  const [days, setDays] = useState([]);

  useState(() => {
    renderDaysArray();
  }, []);

  useEffect(() => {
    setSelectedDay(days[0]);
  }, []);

  function renderDaysArray() {
    const today = new Date();
    const newDays = [];

    for (let i = 0; i < 10; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const day = {
        day: currentDate.getDate(),
        dayOfWeek: currentDate
          .toLocaleString("en-US", {
            weekday: "short",
          })
          .split(",")[0],
        selected: i === 0 ? true : false,
        fullDate: `${
          currentDate
            .toLocaleString("en-US", {
              weekday: "long",
            })
            .split(",")[0]
        }, ${currentDate.getDate()}th ${currentDate.toLocaleString("en-US", {
          month: "long",
        })}, ${currentDate.getFullYear()}`,
      };
      newDays.push(day);
    }
    setDays(newDays);
  }

  function selectDay(day) {
    const updatedDays = days.map((d) => ({
      ...d,
      selected: d.day == day.day,
    }));

    setDays(updatedDays);
    setSelectedDay(day);
  }

  function expandAll() {
    setArrowClicked(true);
  }

  function ListItem({ data }) {
    const iconLoadedRef = useRef(false);
    if (!iconLoadedRef.current && data.index > lastIndexToLoad) {
      iconLoadedRef.current = true;
    }

    return data.index < lastIndexToLoad ? (
      <TouchableOpacity
        onPress={() => selectDay(data.item)}
        style={[styles.itemContainer, data.item.selected && styles.selectedDay]}
      >
        <Text style={styles.itemText}>{data.item.dayOfWeek}</Text>
        <Text style={styles.itemText}>{data.item.day}</Text>
      </TouchableOpacity>
    ) : iconLoadedRef.current || arrowClicked ? (
      arrowClicked ? (
        <TouchableOpacity
          onPress={() => selectDay(data.item)}
          style={[
            styles.itemContainer,
            data.item.selected && styles.selectedDay,
          ]}
        >
          <Text style={styles.itemText}>{data.item.dayOfWeek}</Text>
          <Text style={styles.itemText}>{data.item.day}</Text>
        </TouchableOpacity>
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
        keyExtractor={(item) => item.day}
        renderItem={(data) => <ListItem data={data} />}
        numColumns={10}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 100,
  },

  itemContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 15,
    marginRight: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    minWidth: 60,
  },

  selectedDay: {
    borderWidth: 1,
    backgroundColor: "#e0dddd",
  },

  itemText: {
    fontSize: 12,
    fontWeight: "bold",
  },

  icon: {
    justifyContent: "center",
  },
});
