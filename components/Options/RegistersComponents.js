import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HStack, Text, VStack } from "native-base";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { width } from "../../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";
const RegistersComponents = () => {
  const navigation = useNavigation();
  const registers = [
    {
      id: "1",
      label: "Products",
      link: "Products",
      icon: () => <FontAwesome5 name="box" size={24} color="#52525b" />,
    },
    {
      id: "2",
      label: "Clients",
      link: "Clients",
      icon: () => <FontAwesome5 name="users" size={24} color="#52525b" />,
    },
    {
      id: "3",
      label: "Services",
      link: "Services",
      icon: () => (
        <FontAwesome5 name="servicestack" size={24} color="#52525b" />
      ),
    },
    {
      id: "4",
      label: "Discounts",
      link: "Discounts",
      icon: () => (
        <MaterialCommunityIcons
          name="brightness-percent"
          size={26}
          color="#52525b"
        />
      ),
    },
  ];

  return (
    <HStack
      p="3"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {registers.map((register) => {
        return (
          <TouchableOpacity style={styles.button} key={register.id}>
            <HStack alignItems="center" justifyContent="space-between">
              {register.icon()}
              <Text fontSize="sm" fontWeight="medium">
                0
              </Text>
            </HStack>
            <Text fontWeight="semibold" fontSize="xs">
              {register.label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <LinearGradient
        // Background Linear Gradient
        colors={["#fb923c", "#f97316", "#d97706"]}
        style={styles.onlineShopContainer}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <MaterialIcons name="shopping-cart" size={24} color="white" />
          <FontAwesome5 name="arrow-right" size={24} color="white" />
        </HStack>
        <Text fontWeight="semibold" color="white" fontSize="sm">
          My Online Shop
        </Text>
      </LinearGradient>
    </HStack>
  );
};

export default RegistersComponents;

const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    padding: 10,
    borderRadius: 10,
    aspectRatio: 1 / 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 10,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * 5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 5,
  },
  onlineShopContainer: {
    height: width * 0.3,
    borderRadius: 10,
    justifyContent: "space-evenly",
    flex: 1,
    marginLeft: width * 0.02,
    padding: 12,
  },
});
