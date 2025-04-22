import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Replace with your actual logo */}
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">
        CN
      </div>
      <span className="text-xl font-bold text-gray-800 dark:text-white">
        Church Name
      </span>
    </div>
  );
}
