function objectToQuearyString(obj) {
  let query = "";
  for (key in obj) {
    if (query !== "") {
      query += "&";
    }
    query += `${key}=${obj[key]}`;
    // query += `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
  }

  return query;
}

let obj = {
  name: "John doe",
  age: 40,
};

console.log(objectToQuearyString(obj));
