"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const mountains = [
    { color: "#eef0f3", delay: 0 },
    { color: "#d7dbdf", delay: 0.1 },
    { color: "#bfc4ca", delay: 0.2 },
    { color: "#a7adb5", delay: 0.3 },
    { color: "#8f969f", delay: 0.4 },
    { color: "#777f89", delay: 0.5 },
    { color: "#5f6873", delay: 0.6 },
    { color: "#47505e", delay: 0.7 },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f5f7fa",
        overflow: "hidden",
      }}
    >
      {mountains.map((mountain, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: "120%",
            bottom: 0,
            height: `${(index + 1) * 12}%`,
            backgroundColor: mountain.color,
            zIndex: mountains.length - index,
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            left: "-10%",
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: mountain.delay,
              duration: 1.2,
              ease: "easeOut",
            },
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "-50%",
              transform: "scale(1.5)",
              transformOrigin: "bottom",
            }}
            animate={{
              x: [-10, 10, -10],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 10 + index,
                  ease: "easeInOut",
                },
              },
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export { Hero };