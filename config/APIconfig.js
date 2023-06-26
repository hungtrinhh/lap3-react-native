export const URL = "http://192.168.11.104:3000/data";

export const POST = async (newObj) => {
  try {
    let res = await fetch(URL, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(newObj),
    });
    if (res.ok) {
      console.log("Post thanh cong");
    } else {
      console.log("post that bai");
    }
  } catch (error) {
    console.error(error);
  }
};
export const DELETE = async (idItem) => {
  try {
    let res = await fetch(URL + `/${idItem}`, {
      headers: { "content-type": "application/json" },
      method: "DELETE",
    });
    if (res.ok) {
      console.log("Post thanh cong");
    } else {
      console.log("post that bai");
    }
  } catch (error) {
    console.error(error);
  }
};
export const GET = async (setdata) => {
  let res = await fetch(URL);
  let value = await res.json();
  setdata(value);
};
