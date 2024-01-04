"use client";

import React, { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          //@ts-ignore
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    };

    smoothScroll();
  }, []);

  return <></>;
};

export default SmoothScroll;
