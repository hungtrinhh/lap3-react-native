import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
const Home = (props) => {
  const [name, setname] = useState("Trịnh Đức Hùng");
  const [age, setage] = useState(20);
  const [Address, setAddress] = useState("Thanh hoá");
  const [Phonenumber, setPhonenumber] = useState("123456789");
  const [Email, setEmail] = useState("hungtrinh@gmail.com");
  const Update = (name, age, Address, Phonenumber, Email) => {
    setname(name);
    setage(age);
    setAddress(Address);
    setPhonenumber(Phonenumber);
    setEmail(Email);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Thông tin cá nhân"
        onPress={() =>
          props.navigation.navigate("Profile", {
            name: name,
            age: age,
            Address: Address,
            Phonenumber: Phonenumber,
            Email: Email,
            Update: Update,
          })
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignContent: "center", flex: 1 },
});
