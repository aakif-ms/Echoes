/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EchoContext = createContext();

export default function EchoProvider({ children }) {
  const [echoes, setEchoes] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  function saveToken(newToken, user) {
    setToken(newToken);
    console.log(user);
    if (newToken) {
      localStorage.setItem("token", newToken);
      localStorage.setItem("username", user.name);
    } else {
      localStorage.removeItem("token");
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== token) {
      setToken(token);
    }
  }, [token]);

  useEffect(() => {
    const fetchEchoes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/sendEcho");

        const newData = response.data.map((echo) => ({
          id: echo._id,
          image: echo.image,
          title: echo.title,
          description: echo.description,
        }));

        setEchoes(newData);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    const interval = setInterval(fetchEchoes, 1000);

    return () => clearInterval(interval);
  }, []);
  return <EchoContext.Provider value={{echoes, saveToken, token}}>{children}</EchoContext.Provider>;
}
