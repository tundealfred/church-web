"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends MotionProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({
  children,
  className,
  appName,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
