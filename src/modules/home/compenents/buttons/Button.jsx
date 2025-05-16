import React from "react";
import { motion } from "framer-motion";

export default function Button({ text }) {
  return (
    <div className="button-container">
      {" "}
      <div className="sm:mt-[1%] mt-[3%]  items-center gap-5">
        <motion.button
          initial={{ "--x": "100%", scale: 1 }}
          animate={{ "--x": "-100%" }}
          whileTap={{ scale: 0.97 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          className="rounded-[8px] text-white px-5 py-2.5 relative radial-gradient"
        >
          <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
            {text}
          </span>
          <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.button>
      </div>
    </div>
  );
}
