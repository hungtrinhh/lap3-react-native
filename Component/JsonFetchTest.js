import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { DELETE, GET, URL } from "../config/APIconfig";
import { useIsFocused } from "@react-navigation/native";

const JsonFetchTest = (props) => {
  const [data, setdata] = useState([]);
  const { navigation } = props;
  const { navigate } = navigation;
  const RenderItem = (props) => {
    const { item } = props.item;

    return (
      <TouchableOpacity
        onPress={() => {
          DELETE(item.id);
          GET(setdata);
        }}
      >
        <View style={{ borderTopWidth: 1, paddingVertical: 5 }}>
          <Text>id: {item.id}</Text>
          <Text>name: {item.name}</Text>
          <Text>desc: {item.desc}</Text>
          <Text>price: {item.price}</Text>
          <Text>sale_price: {item.sale_price}</Text>
          <Text>status: {item.status + ""}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const isforcus = useIsFocused();
  console.log(data);

  useEffect(() => {
    GET(setdata);
  }, [isforcus]);
  return (
    <View style={styles.container}>
      <View>
        <Button title="GotoAdd" onPress={() => navigate("ADD")} />
      </View>
      <Text>List:</Text>

      <FlatList
        data={data}
        renderItem={(item) => <RenderItem item={item} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={{ ...styles.button }}
        onPress={() => GET(setdata)}
      >
        <Text style={styles.button}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JsonFetchTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: "10%",
    right: "5%",
    color: "white",
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
