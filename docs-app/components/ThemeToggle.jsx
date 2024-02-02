"use client";

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(()  => {
        const theme = localStorage.getItem("theme");
        console.log("Stored Theme:", theme);
        if (theme === "dark") setDarkMode(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "white");
        }
    }, [darkMode]);
    return (
        <div
            className="relative w-16 h-8 flex items-center
            dark:bg-dark bg-myPurple cursor-pointer
            rounded-full p-1 hover:bg-myPurple"
            onClick={() => setDarkMode(!darkMode)}
        >
            <FaMoon className="text-dark hover:text-myPurple" size={12} />
            <div
                className="absolute bg-white dark:bg-dark
                dark:bg-myPurple w-6 h-6 rounded-full shadow-md
                transform transition-transform duration-300"
                style={
                    darkMode ? { left: "2px" } : { right: "2px" }
                }
            ></div> 
            <BiTransfer className="mx-2 text-gray-600 hover:text-myPurple" size={12} />
            <FaSun
                className="ml-auto text-dark hover:text-myPurple"
                size={12}
            /> 
        </div>
    );
};

export default ThemeToggle;