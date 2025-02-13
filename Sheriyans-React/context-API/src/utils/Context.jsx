import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

function Context(props) {
  const [user, setUser] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const getData = () => {
    axios
      .get(API_URL)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
