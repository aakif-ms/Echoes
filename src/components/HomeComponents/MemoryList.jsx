import memories from "./Memories";
import { motion } from "framer-motion";

import Button from "../Button.jsx";

export default function Memories() {
  return (
    <div className="flex flex-col gap-6 mx-8 mt-16 overflow-hidden">
      {memories.map((memory, index) => (
        <div
          key={memory.id}
          className={`flex flex-col md:flex-row mb-6 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } `}
        >
          <div className="w-full sm:w-1/3">
            <motion.img
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={memory.image}
              alt={memory.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full sm:w-2/3 flex flex-col  px-4"
          >
            <h1 className="text-3xl font-medium font-gummy text-blueShade">
              {memory.title}
            </h1>
            <p className="text-stone-700 font-ubuntu font-normal mt-2">
              {memory.description}
            </p>
          </motion.div>
        </div>
      ))}
      <span className="self-center mb-10">
        <Button>View All Echoes</Button>
      </span>
    </div>
  );
}
