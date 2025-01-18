/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EchoContext = createContext();

export default function EchoProvider({ children }) {
  const [echoes, setEchoes] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [name, setName] = useState(localStorage.getItem("username") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  function saveToken(newToken, user) {
    setToken(newToken);
    setName(user.name);
    setUserId(user._id);
    if (newToken) {
      localStorage.setItem("token", newToken);
      localStorage.setItem("username", user.name);
      localStorage.setItem("userId", user._id);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userId");
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== token) {
      setToken(token);
    }
  }, [token]);

  // useEffect(() => {
  //   if (userId) {

  //     fetchEchoes();
  //   }
  // }, [userId]);

  const fetchEchoes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/echo/sendEcho/${userId}`
      );
      setEchoes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <EchoContext.Provider value={{ echoes, saveToken, token, name, fetchEchoes }}>
      {children}
    </EchoContext.Provider>
  );
}
