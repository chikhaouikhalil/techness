import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { View, VStack, Text, Image, HStack, ScrollView } from "native-base";

const Reports = ({ navigation }) => {
  const userData = useSelector((state) => state.userData);

  return (
    <View flex={1} bg="white">
      {/** header */}
      <VStack bg="orange.500" px="3" h="16" justifyContent="center" w="full">
        <Text color="white" fontSize="lg">
          Reports
        </Text>
      </VStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/** for tab navigation */}
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  link: {
    height: 45,
  },
});
