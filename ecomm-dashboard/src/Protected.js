import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Protected(Props) {
  const history = useHistory();
  let Cmp = Props.Cmp;
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/register");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Protected;
