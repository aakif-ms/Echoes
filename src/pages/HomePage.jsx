import { useState, useEffect } from "react";

export default function HomePage() {
  const [displayedName, setDisplayedName] = useState("");
  const userName = "Aakif";
  const typingSpeed = 200;

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < userName.length) {
        setDisplayedName((prev) => prev + userName[i]);
        i++;
      } else {
        clearInterval(interval); // Stop the animation after completing the name
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [userName]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-300">
      <h1 className="text-4xl md:text-6xl font-roboto text-gray-700 border-r-2 border-gray-700 pr-2 animate-blink">
        {displayedName}
      </h1>
    </div>
  );
}
