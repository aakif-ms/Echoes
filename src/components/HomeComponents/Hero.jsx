/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import pixel from "../../assets/pixel.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <img src={pixel} alt="pixel home image" />
        <div className="absolute bottom-28 inset-0 flex items-center justify-center text-white">
          <motion.h1
            className="flex flex-col text-4xl md:text-5xl gap-6 font-cursive text-center mt-24"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Welcome <span className="text-6xl md:text-9xl">Aakif</span>
          </motion.h1>
        </div>
      </div>
      <p className="font-gummy text-2xl text-blueShade text-center">Welcome back Aakif, Let's relive your cherished memories</p>
    </div>
  );
}
