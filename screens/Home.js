import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserData } from "../redux/Actions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  // logout
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
    dispatch(setUserData({}));
    await AsyncStorage.removeItem("auth");
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };
  // get user info
  const getUserData = async () => {
    const jsonValue = await AsyncStorage.getItem("auth");
    const authFromJson = JSON.parse(jsonValue);
    console.log("auth when getting data from home", authFromJson);
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${authFromJson.accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      console.log(data);

      dispatch(setUserData(data));
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = () => {
    if (userData.id) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userData.picture }} style={styles.profilePic} />
          <Text>family_name {userData.family_name}</Text>
          <Text>given_name {userData.given_name}</Text>
          <Text>id {userData.id}</Text>
          <Text>email {userData.email}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.containter}>
      {showUserData()}
      <Button title="logout" onPress={logoutHandler} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
