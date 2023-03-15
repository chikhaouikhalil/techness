import { StyleSheet, View, Button, Platform, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import { Spinner } from "native-base";
import { SolidButton } from "../components/elements/Buttons";
import { height, width } from "../utils/Dimensions";

export default function SignIn({ navigation }) {
  const [auth, setAuth] = useState();
  const [requireRefresh, setRequireRefresh] = useState(false);
  const [loader, setLoader] = useState(true);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "486212639964-6eea5c9iiggjucge534jq42ot90uindg.apps.googleusercontent.com",
    iosClientId:
      "486212639964-4t1setlabpv71deb0bi4tornctdqn264.apps.googleusercontent.com",
  });

  useEffect(() => {
    //console.log("reponse is : ", response);
    if (response?.type === "success") {
      //setAuth(response.authentication);
      setLoader(true);
      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication)
        );
      };
      persistAuth();
      navigation.replace("TabNavigation");
    }
  }, [response]);

  /* const getClientId = () => {
    if (Platform.OS === "ios") {
      return "139581308140-imf4dv4bogf4aj945eosqvnett4mp06e.apps.googleusercontent.com";
    } else if (Platform.OS === "android") {
      return "139581308140-n3ebiqnid8tmskvneo7lck2cku8va9s3.apps.googleusercontent.com";
    } else {
      console.log("Invalid platform - not handled");
    }
  };

  const refreshToken = async () => {
    const clientId = getClientId();

    const tokenResult = await AuthSession.refreshAsync(
      {
        clientId: clientId,
        refreshToken: auth.refreshToken,
      },
      {
        tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token",
      }
    );

    tokenResult.refreshToken = auth.refreshToken;
    console.log("token result", tokenResult);
    setAuth(tokenResult);
    await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
    // go to home screen
    setRequireRefresh(false);
    navigation.replace("TabNavigation");
  };*/

  useEffect(() => {
    setLoader(true);
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        // setAuth(authFromJson);
        //console.log(authFromJson);
        // WE SET REQUIRE STATE TO TRUE OF FALSE BASED OF TOKEN
        if (
          !AuthSession.TokenResponse.isTokenFresh({
            expiresIn: authFromJson.expiresIn,
            issuedAt: authFromJson.issuedAt,
          })
        ) {
          await AsyncStorage.removeItem("auth");
          setLoader(false);
        } else {
          navigation.replace("TabNavigation");
        }
      } else {
        setLoader(false);
      }
    };
    getPersistedAuth();
  }, []);

  if (loader) {
    return (
      <View style={styles.container}>
        <Spinner size="lg" colorScheme="warning" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/*<Image
        source={{
          uri: "https://img.freepik.com/free-photo/light-bulb-made-from-yellow-paper-ball_1205-372.jpg?1&t=st=1678836706~exp=1678837306~hmac=c689838a2b28403b02c30ee73fb5d0779781d2b64f49f446d7b1389dbc47eae1",
        }}
        style={{
          width: width,
          height: height,
          position: "absolute",
          opacity: 1,
        }}
      />*/}
      <SolidButton
        onPress={() => promptAsync({ useProxy: false, showInRecents: true })}
      >
        Login With Gmail
      </SolidButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
