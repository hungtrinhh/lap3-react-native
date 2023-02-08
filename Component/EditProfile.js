import { Image, StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const EditProfile = (props) => {
  console.log(props);
  const { route, navigation } = props;
  const { Update } = route.params;
  console.log(age);

  const Save = () => {
    Update(name, age, Address, Phonenumber, Email);
    navigation.navigate("Profile", {
      name: name,
      age: age,
      Address: Address,
      Phonenumber: Phonenumber,
      Email: Email,
    });
  };
  const [name, setname] = useState(route.params.name);
  const [age, setage] = useState(route.params.age);
  const [Address, setAddress] = useState(route.params.Address);
  const [Phonenumber, setPhonenumber] = useState(route.params.Phonenumber);
  const [Email, setEmail] = useState(route.params.Email);

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={(t) => setname(t)}
        style={styles.input}
      ></TextInput>
      <TextInput
        value={"" + age}
        onChangeText={(t) => setage(t)}
        style={styles.input}
      ></TextInput>
      <TextInput
        value={Address}
        onChangeText={(t) => setAddress(t)}
        style={styles.input}
      ></TextInput>
      <TextInput
        value={Phonenumber}
        onChangeText={(t) => setPhonenumber(t)}
        style={styles.input}
      ></TextInput>
      <TextInput
        value={Email}
        onChangeText={(t) => setEmail(t)}
        style={styles.input}
      ></TextInput>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Button title="Save" onPress={Save} />
        <Button
          title="Cancel"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  input: {
    borderWidth: 1,
    width: "80%",
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
