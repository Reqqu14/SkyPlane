import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "../Button";
import { FlatList } from "react-native-gesture-handler";
import Seat from "./Seat";

export default function Card() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const data = {
    planeRows: [
      {
        id: 1,
        left: [
          {
            id: "A1",
            reserved: true,
            available: false,
            selected: false,
          },
          {
            id: "A2",
            reserved: true,
            available: false,
            selected: false,
          },
        ],
        right: [
          {
            id: "A3",
            reserved: false,
            available: true,
            selected: false,
          },
          {
            id: "A4",
            reserved: true,
            available: false,
            selected: false,
          },
        ],
      },
      {
        id: 2,
        left: [
          {
            id: "B1",
            reserved: true,
            available: false,
            selected: false,
          },
          {
            id: "B2",
            reserved: true,
            available: false,
            selected: false,
          },
        ],
        right: [
          {
            id: "B3",
            reserved: false,
            available: true,
            selected: false,
          },
          {
            id: "B4",
            reserved: true,
            available: false,
            selected: false,
          },
        ],
      },
      {
        id: 3,
        left: [
          {
            id: "C1",
            reserved: true,
            available: false,
            selected: false,
          },
          {
            id: "C2",
            reserved: false,
            available: true,
            selected: false,
          },
        ],
        right: [
          {
            id: "C3",
            reserved: false,
            available: true,
            selected: false,
          },
          {
            id: "C4",
            reserved: true,
            available: false,
            selected: false,
          },
        ],
      },
      {
        id: 4,
        left: [
          {
            id: "D1",
            reserved: true,
            available: false,
            selected: false,
          },
          {
            id: "D2",
            reserved: false,
            available: true,
            selected: false,
          },
        ],
        right: [
          {
            id: "D3",
            reserved: false,
            available: true,
            selected: false,
          },
          {
            id: "D4",
            reserved: false,
            available: true,
            selected: false,
          },
        ],
      },
    ],
  };

  function RenderSeatItem({ row }) {
    return (
      <TouchableOpacity onPress={() => selectSeat(row)}>
        <Seat
          style={[
            { backgroundColor: row.reserved ? "#d9d9d9" : "" },
            styles.seat,
            !row.reserved ? styles.seatAvailable : "",
            selectedSeats.includes(row.id) ? styles.selectedSeat : "",
          ]}
          seatSelected={selectedSeats.includes(row.id)}
          id={row.id}
        />
      </TouchableOpacity>
    );
  }

  function selectSeat(item) {
    if (selectedSeats.includes(item.id)) {
      item.selected = false;
      console.log(item);
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats.filter((x) => x !== item.id),
      ]);
      return;
    }

    if (!item.reserved && item.available) {
      item.selected = true;
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, item.id]);
    }
  }

  function RenderSeatsToChose({ data }) {
    return (
      <View style={styles.seatsContainer}>
        <View style={styles.seats}>
          {data.item.left.map((row) => {
            return <RenderSeatItem row={row} key={row.id} />;
          })}
        </View>
        <View style={styles.seats}>
          {data.item.right.map((row) => {
            return <RenderSeatItem row={row} key={row.id} />;
          })}
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.detailsContainer}>
        <Image source={require("../../assets/images/logo.png")} />
        <Text style={styles.airlineText}>Uizard Airlines</Text>
        <Text style={styles.dateText}>Friday 16th, September, 2022</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.buttonStyle}
          buttonText={styles.customButtonText}
        >
          BASIC
        </Button>
      </View>
      <FlatList
        data={data.planeRows}
        keyExtractor={(key) => key.id}
        renderItem={(data) => <RenderSeatsToChose data={data} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: "center",
  },

  airlineText: {
    color: "#222222",
    marginTop: 10,
  },

  dateText: {
    color: "#7b7b7b",
    fontWeight: "500",
    marginTop: 10,
  },

  buttonContainer: {
    marginVertical: 20,
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#009688",
    padding: 3,
    borderRadius: 60,
    width: 70,
  },

  customButtonText: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  seatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  seats: {
    flexDirection: "row",
  },

  seat: {
    width: 40,
    height: 40,
  },

  seatAvailable: {
    borderWidth: 1,
    borderColor: "black",
  },

  selectedSeat: {
    backgroundColor: "#009688",
    borderWidth: 0,
  },
});
