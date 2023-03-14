import { StyleSheet, View, Button, Platform } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";

export default function SignIn({ navigation }) {
  const [auth, setAuth] = useState();
  const [requireRefresh, setRequireRefresh] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "486212639964-6eea5c9iiggjucge534jq42ot90uindg.apps.googleusercontent.com",
    iosClientId:
      "486212639964-4t1setlabpv71deb0bi4tornctdqn264.apps.googleusercontent.com",
  });

  useEffect(() => {
    console.log("reponse is : ", response);
    if (response?.type === "success") {
      setAuth(response.authentication);

      const persistAuth = async () => {
        await AsyncStorage.setItem(
          "auth",
          JSON.stringify(response.authentication)
        );
      };
      persistAuth();
      navigation.replace("Home");
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        setAuth(authFromJson);
        console.log(authFromJson);
        // WE SET REQUIRE STATE TO TRUE OF FALSE BASED OF TOKEN
        if (
          !AuthSession.TokenResponse.isTokenFresh({
            expiresIn: authFromJson.expiresIn,
            issuedAt: authFromJson.issuedAt,
          })
        ) {
          refreshToken();
        } else {
          navigation.replace("Home");
        }
      }
    };
    getPersistedAuth();
  }, []);

  const getClientId = () => {
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

    setAuth(tokenResult);
    await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
    // go to home screen
    setRequireRefresh(false);
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Login With Gmail"
        onPress={() => promptAsync({ useProxy: false, showInRecents: true })}
      />
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
