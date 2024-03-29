"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(24).fill(1);
  const cols = new Array(6).fill(1);


  return (
    <div
      className={cn(
        "absolute p-4 flex w-full h-full opacity-25",
        className
      )}
      {...rest}
    >
      
      <div className="absolute w-full h-full z-10 bg-gradient-to-tr from-white from-40% to-transparent" />

      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative"
        >
          {/* {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(--neutral-100)`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 1 },
              }}
              key={`col` + j}
              className="w-24 h-32  border border-slate-400 rounded-2xl m-2 relative"
            >
            </motion.div>
          ))} */}

          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(--neutral-100)`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 1 },
              }}
              key={`col` + j}
              className="w-24 h-32  border border-spacing-3 border-neutral-900 rounded-2xl m-2 shadow-2xl shadow-neutral-200 relative"
            >
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
