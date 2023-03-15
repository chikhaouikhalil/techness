import {
  Easing,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { PresenceTransition, View } from "native-base";
import { width } from "../../utils/Dimensions";

const links = [
  {
    link: "Home",
    label: "Sales",
    icon: (isFocused) => (
      <MaterialCommunityIcons
        name="brightness-percent"
        size={isFocused ? 20 : 24}
        color="white"
      />
    ),
  },
  {
    link: "Reports",
    label: "Reports",
    icon: (isFocused) => (
      <Ionicons
        name="bar-chart-sharp"
        size={isFocused ? 22 : 26}
        color="white"
      />
    ),
  },
  {
    link: "Options",
    label: "Options",
    icon: (isFocused) => (
      <Ionicons name="options" size={isFocused ? 22 : 26} color="white" />
    ),
  },
];

const TabBarComponent = ({ state, descriptors, navigation }) => {
  return (
    <View bg="orange.500" style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <Pressable
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.link,
              { backgroundColor: isFocused ? "#ea580c" : "transparent" },
            ]}
          >
            <PresenceTransition
              visible={isFocused}
              initial={{
                opacity: 0.7,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 500,
                  easing: Easing.linear,
                },
              }}
            >
              {links[index].icon(isFocused)}
            </PresenceTransition>
            {isFocused && (
              <PresenceTransition
                style={{
                  width: "100%",

                  alignItems: "center",
                  justifyContent: "center",
                }}
                visible={isFocused}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 500,
                    easing: Easing.linear,
                  },
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    marginTop: 2,
                    fontFamily: "Regular",
                    fontSize: 12,
                  }}
                >
                  {label}
                </Text>
              </PresenceTransition>
            )}
          </Pressable>
        );
      })}
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#c22222",
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
    position: "absolute",
    bottom: 0,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  link: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
