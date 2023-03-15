import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { View, VStack, Text, Image, HStack, ScrollView } from "native-base";
import RegistersComponents from "../components/Options/RegistersComponents";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserData } from "../redux/Actions";
import * as AuthSession from "expo-auth-session";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import Constants from "expo-constants";

const Options = ({ navigation }) => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const version = Constants.manifest.version;

  useEffect(() => {
    setUser(userData);
  }, []);
  // logout Handler
  const logoutHandler = async () => {
    const jsonValue = await AsyncStorage.getItem("auth");
    const authFromJson = JSON.parse(jsonValue);
    await AuthSession.revokeAsync(
      {
        token: authFromJson.accessToken,
      },
      {
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      }
    );

    await AsyncStorage.removeItem("auth");
    dispatch(setUserData({}));
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  const showUserData = () => {
    if (user.id) {
      return (
        <HStack
          bg="gray.50"
          alignItems="center"
          justifyContent="space-between"
          style={styles.userInfo}
          p="3"
        >
          <Image
            source={{ uri: user.picture }}
            w="16"
            style={{ aspectRatio: 1 / 1, borderRadius: 1000 }}
            alt="user"
          />
          <VStack ml="2" w="full">
            <Text fontWeight="light" fontSize="xs">
              @{user.id}
            </Text>
            <Text
              fontWeight="bold"
              mt="-0.5"
              textTransform="capitalize"
              fontSize="sm"
              color="dark.300"
            >
              {user.given_name} {user.family_name}
            </Text>

            <Text mt="-0.5" fontSize="xs" fontWeight="medium">
              {user.email}
            </Text>
          </VStack>
        </HStack>
      );
    }
  };

  return (
    <View flex={1} bg="white">
      {/** header */}
      <VStack bg="orange.500" px="3" h="16" justifyContent="center" w="full">
        <Text color="white" fontSize="lg">
          Options
        </Text>
      </VStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/** user infos */}
        {showUserData()}
        {/** registers */}
        <Text px="3" mt="3" color="dark.300">
          Registers
        </Text>
        <RegistersComponents />
        {/** more options */}
        <Text px="3" mt="2" color="dark.300">
          More Options
        </Text>
        <VStack p="3">
          {/** Become Plus */}
          <TouchableNativeFeedback>
            <HStack alignItems="center" style={styles.link}>
              <MaterialCommunityIcons name="crown" size={24} color="#52525b" />
              <Text ml="3" color="dark.300">
                Become Plus
              </Text>
            </HStack>
          </TouchableNativeFeedback>
          {/** Currency */}
          <TouchableNativeFeedback>
            <HStack alignItems="center" style={styles.link}>
              <MaterialCommunityIcons
                name="currency-eur"
                size={24}
                color="#52525b"
              />
              <Text ml="3" color="dark.300">
                Currency
              </Text>
            </HStack>
          </TouchableNativeFeedback>

          {/** share */}
          <TouchableNativeFeedback>
            <HStack alignItems="center" style={styles.link}>
              <Ionicons name="share-social" size={24} color="#52525b" />

              <Text ml="3" color="dark.300">
                Share
              </Text>
            </HStack>
          </TouchableNativeFeedback>
          {/** rate us */}
          <TouchableNativeFeedback>
            <HStack alignItems="center" style={styles.link}>
              <FontAwesome5
                name="hand-holding-medical"
                size={24}
                color="#52525b"
              />
              <Text ml="3" color="dark.300">
                Rate us
              </Text>
            </HStack>
          </TouchableNativeFeedback>
          {/** Privacy Policy */}
          <TouchableNativeFeedback>
            <HStack alignItems="center" style={styles.link}>
              <FontAwesome5 name="info-circle" size={24} color="#52525b" />
              <Text ml="4">Privacy Policy</Text>
            </HStack>
          </TouchableNativeFeedback>
          {/** Logout */}
          <TouchableNativeFeedback onPress={logoutHandler}>
            <HStack alignItems="center" style={styles.link}>
              <MaterialCommunityIcons name="logout" size={24} color="#52525b" />
              <Text ml="3" color="dark.300">
                Logout
              </Text>
            </HStack>
          </TouchableNativeFeedback>
        </VStack>
        <VStack
          bg="white"
          p="3"
          borderTopColor="gray.50"
          borderTopWidth={1}
          alignItems="center"
          justifyContent="center"
        >
          <Text color="dark.400" fontSize="sm" fontWeight="light">
            Techness © - Version {version}
          </Text>
        </VStack>
        {/** for tab navigation */}
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  link: {
    height: 45,
  },
});
