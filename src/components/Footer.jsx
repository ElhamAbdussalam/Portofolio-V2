import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[#0f0f0f] relative  border-t border-gray-800 mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm">
        {" "}
        &copy; {new Date().getFullYear()} M Elham Abdussalam. All rights
        reserved.
      </p>
    </footer>
  );
};
