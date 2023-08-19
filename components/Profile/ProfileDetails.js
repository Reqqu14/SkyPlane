import { StyleSheet, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import Button from "../../components/Button";
import DropdownComponent from "../../components/DropdownComponent";
import { storeData } from "../../store/asyncStorage/asyncStorage";
import { useIsFocused, useNavigation } from "@react-navigation/native";

export default function ProfileDetails({ profileData }) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [inputValues, setInputValues] = useState({
    name: { value: "", isValid: true },
    surname: { value: "", isValid: true },
    email: { value: "", isValid: true },
    dob: { value: "", isValid: true },
    airport: { value: "", isValid: true },
  });
  const [dropdownValue, setDropdownValue] = useState("");
  useEffect(() => {
    if (profileData != null) {
      setProfileData();
    }
  }, [profileData, isFocused]);

  function setProfileData() {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      name: { value: profileData.name || "", isValid: true },
      surname: { value: profileData.surname || "", isValid: true },
      email: { value: profileData.email || "", isValid: true },
      dob: { value: profileData.dob || "", isValid: true },
      airport: { value: profileData.airport || "", isValid: true },
    }));
    setDropdownValue(profileData.airport);
  }

  function inputChangeHanlder(identifier, value) {
    let filteredValue = value;

    if (identifier == "name" || identifier == "surname") {
      filteredValue = value.replace(/[^a-zA-Z]/g, "");
    }

    if (identifier == "dob") {
      filteredValue = value.replace(".", "-");
    }

    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [identifier]: { value: filteredValue, isValid: true },
      };
    });
  }

  async function SubmitHandler() {
    const profileData = {
      name: inputValues.name.value,
      surname: inputValues.surname.value,
      email: inputValues.email.value,
      dob: new Date(inputValues.dob.value),
      airport: dropdownValue,
    };

    await isEnteredDataValid(profileData);
  }

  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  async function isEnteredDataValid(profileData) {
    const { name, surname, email, dob, airport } = profileData;
    const nameIsValid = name.trim().length > 3;
    const surnameIsValid = surname.trim().length > 3;
    const emailIsValid = isValidEmail(email);
    const dobIsValid = dob.toString() !== "Invalid Date";
    const airportIsValid = airport.length > 0;

    if (
      !nameIsValid ||
      !surnameIsValid ||
      !emailIsValid ||
      !dobIsValid ||
      !airportIsValid
    ) {
      setInputValues((current) => {
        return {
          name: { value: current.name.value, isValid: nameIsValid },
          surname: { value: current.surname.value, isValid: surnameIsValid },
          email: { value: current.email.value, isValid: emailIsValid },
          dob: { value: current.dob.value, isValid: dobIsValid },
          airport: { value: current.airport.value, isValid: airportIsValid },
        };
      });
    } else {
      await storeData("profile", JSON.stringify(profileData));
      navigation.navigate("HomeStack");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={styles.image}
            />
          </View>
        </View>
        <DropdownComponent
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
          invalid={!inputValues.airport.isValid}
        />
        <View>
          <CustomTextInput
            label="Name"
            textInputConfig={{
              onChangeText: inputChangeHanlder.bind(this, "name"),
              maxLength: 30,
              value: inputValues.name.value,
            }}
            invalid={!inputValues.name.isValid}
          />
          <CustomTextInput
            label="Surname"
            textInputConfig={{
              onChangeText: inputChangeHanlder.bind(this, "surname"),
              maxLength: 30,
              value: inputValues.surname.value,
            }}
            invalid={!inputValues.surname.isValid}
          />
          <CustomTextInput
            label="Email"
            textInputConfig={{
              keyboardType: "email-address",
              onChangeText: inputChangeHanlder.bind(this, "email"),
              maxLength: 50,
              value: inputValues.email.value,
            }}
            invalid={!inputValues.email.isValid}
          />
          <CustomTextInput
            label="Date of birth"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              keyboardType: "number-pad",
              maxLength: 10,
              onChangeText: inputChangeHanlder.bind(this, "dob"),
              value: inputValues.dob.value,
            }}
            invalid={!inputValues.dob.isValid}
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={async () => await SubmitHandler()}
            buttonStyle={styles.buttonCustomStyle}
            buttonText={styles.customButtonText}
          >
            Save
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
  },

  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },

  imageView: {
    width: 150,
    height: 150,
    backgroundColor: "yellow",
    borderRadius: 75,
    elevation: 25,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 0.5,
    borderColor: "black",
  },

  button: {
    marginTop: 35,
  },

  buttonCustomStyle: {
    backgroundColor: "#009688",
    padding: 10,
    borderRadius: 60,
    marginHorizontal: 50,
  },

  customButtonText: {
    fontWeight: "500",
    color: "white",
    fontSize: 16,
  },
});
