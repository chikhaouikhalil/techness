import { StyleSheet } from "react-native";
import React from "react";
import { HStack, IconButton, Text, View } from "native-base";
import moment from "moment";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHeader = ({ toggleTheme }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const day = days[today.getDay()];
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="orange.600"
      px="3"
      style={{ height: 70 }}
    >
      <HStack alignItems="center" space="1.5">
        <MaterialCommunityIcons
          name="weather-night-partly-cloudy"
          size={35}
          color="white"
        />
        <View>
          <Text color="white" fontWeight="medium" style={{ fontSize: 18 }}>
            {day}
          </Text>
          <Text
            color="gray.200"
            mt="0.5"
            fontWeight="medium"
            style={{ fontSize: 14 }}
          >
            {moment(today).format("LL")}
          </Text>
        </View>
      </HStack>
      <IconButton onPress={toggleTheme}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={30}
          color="white"
        />
      </IconButton>
    </HStack>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
