import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "../Button";
import { FlatList } from "react-native-gesture-handler";
import Seat from "./Seat";
import { HEIGHT } from "../../constants/constants";

export default function Card({ selectedSeatsHandler }) {
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
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats.filter((x) => x !== item.id),
      ]);
      selectedSeatsHandler(item.id);
      return;
    }

    if (!item.reserved && item.available) {
      item.selected = true;
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, item.id]);
      selectedSeatsHandler(item.id, true);
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
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.image}
        />
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

  image: {
    width: HEIGHT * 0.046,
    height: HEIGHT * 0.046,
  },

  airlineText: {
    color: "#222222",
    marginTop: HEIGHT * 0.013,
    fontSize: HEIGHT * 0.018,
  },

  dateText: {
    color: "#7b7b7b",
    fontWeight: "500",
    fontSize: HEIGHT * 0.018,
    marginTop: HEIGHT * 0.013,
  },

  buttonContainer: {
    marginVertical: HEIGHT * 0.026,
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#009688",
    padding: 3,
    borderRadius: 60,
    width: HEIGHT * 0.09,
  },

  customButtonText: {
    color: "white",
    fontSize: HEIGHT * 0.016,
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
    width: HEIGHT < 650 ? HEIGHT * 0.075 : HEIGHT * 0.06,
    height: HEIGHT < 650 ? HEIGHT * 0.06 : HEIGHT * 0.06,
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
