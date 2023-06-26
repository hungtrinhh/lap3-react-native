import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const UseEffectTest = () => {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");

  useEffect(() => {
    setName("hung");
  }, []);

  useEffect(() => {
    setID("ph27731");
  }, [name]);
  return (
    <View style={styles.container}>
      <Text>Name :{name}</Text>
      <Text>ID : {ID}</Text>
    </View>
  );
};

export default UseEffectTest;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
