import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../axioos/axiosWithAuth";

function Main() {
  const [friends, setFreinds] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFreinds(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {friends.map((e) => {
        return (
          <div key={e.id}>
            <h3>{e.name}</h3>
            <h3>{e.age}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
