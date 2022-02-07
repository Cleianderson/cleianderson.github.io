import React, { useEffect, useState } from "react";
import smalltalk from "smalltalk";

import HomeRoutes from "./routes/Home";
import "./global.css";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()

  const setUserPassword = (pass: string) => dispatch({ type: 'SET_USER_PASSWORD', payload: { userPassword: pass } })

  useEffect(() => {
    const showInputPassword = async () => {
      const inputUser = await smalltalk.prompt(
        "Senha",
        "Insira a senha para usar a aplicação",
        ""
      );
      setUserPassword(inputUser);
    };
    showInputPassword();
  }, []);

  return (
    <div className="App">
      <HomeRoutes />
    </div>
  );
}

export default App;
