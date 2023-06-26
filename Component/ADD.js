import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { POST, URL } from "../config/APIconfig";

const ADD = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [Address, setAddress] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Email, setEmail] = useState("");

  const AddData = () => {
    const newObj = {
      name,
      desc: age,
      price: Phonenumber,
      sale_price: "1",
      status: false,
    };

    POST(newObj);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        placeholder="name"
        onChangeText={(t) => setname(t)}
        style={styles.input}
      />
      <TextInput
        value={"" + age}
        placeholder="age"
        onChangeText={(t) => setage(t)}
        style={styles.input}
      />
      <TextInput
        placeholder="address"
        value={Address}
        onChangeText={(t) => setAddress(t)}
        style={styles.input}
      />
      <TextInput
        placeholder="phone"
        value={Phonenumber}
        onChangeText={(t) => setPhonenumber(t)}
        style={styles.input}
      />
      <TextInput
        placeholder="email"
        value={Email}
        onChangeText={(t) => setEmail(t)}
        style={styles.input}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <Button
          title="clear"
          onPress={() => {
            setAddress("");
            setEmail(""), setname(""), setPhonenumber(""), setage("");
          }}
        />
        <Button title="Submit" onPress={() => AddData} />
      </View>
    </View>
  );
};

export default ADD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    marginTop: 10,
  },
});
