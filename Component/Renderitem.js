import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
const Renderitem = (props) => {
  let linkdefau =
    "https://tingenz.com/wp-content/uploads/2022/09/hinh-anh-co-gai-cute-anime-8-min.jpg";


  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 3,
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 80, height: 80, borderRadius: 9999 }}
            source={{
              uri: props.item.condition ? props.item.linkanh : linkdefau,
            }}
          />

          <View style={{ marginTop: 10 }}>
            <Text
              style={{ marginHorizontal: 5, fontSize: 20, fontWeight: "600" }}
            >{`Tên: ${props.item.name}`}</Text>
            <Text
              style={{ marginHorizontal: 5, fontSize: 14 }}
            >{`Mô tả: ${props.item.mota}`}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{ backgroundColor: "white" }}
            onPress={() => {
              props.onDelete(props.item);
            }}
          >
            <Text style={styles.button}>Xoá</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "white" }}
            onPress={() => {
              props.onEdit(props.item.id);
            }}
          >
            <Text style={styles.button}>Sửa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Renderitem;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#00ABB3",
    borderRadius: 5,
    color: "white",
    marginBottom: 10,
  },
});
