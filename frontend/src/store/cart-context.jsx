/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EchoContext = createContext();

export default function EchoProvider({ children }) {
  const [echoes, setEchoes] = useState([]);

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
    fetchEchoes();
  }, []);
  return <EchoContext.Provider value={echoes}>{children}</EchoContext.Provider>;
}
