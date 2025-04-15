"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./HeroData";
import { IHero } from "./HeroDto";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    afterChange: (index: number) => {
      setCurrentSlide(index);
    },
  };

  return (
    <section
      aria-labelledby="category-heading"
      className="bg-white pt-[3.5rem] sm:hidden block min-h-screen"
    >
      <div className="mx-auto pb-24 sm:mt-[10rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="slider-container overflow-hidden">
          <Slider {...settings}>
            {slides.map((value: IHero, index: number) => {
              const isActive = index === currentSlide;
              const isLeftText = value.id % 2 !== 0;

              const backgroundColor = isLeftText
                ? "#001A4B" // left-aligned background
                : "#b70000"; // right-aligned background

              return (
                <div
                  key={value.id}
                  className="relative h-[40rem] w-full overflow-hidden"
                >
                  <Image
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover brightness-65 transition-transform duration-[4000ms] scale-105 hover:scale-110"
                    src={value.src}
                    alt="slide image"
                  />

                  {/* Description + Background */}
                  <div
                    className={`absolute bottom-16 text-white text-3xl md:text-5xl font-extrabold tracking-tight z-10 ${
                      isLeftText
                        ? "left-4 text-left w-5/8"
                        : "right-[1rem] text-right w-5/8"
                    }`}
                  >
                    <div className="relative inline-block px-4 py-1">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <>
                            {/* Background Slide-In */}
                            <motion.div
                              key={`bg-slide-${value.id}-${index}`}
                              initial={{
                                x: isLeftText ? "-100%" : "100%",
                                opacity: 0,
                              }}
                              animate={{ x: "0%", opacity: 1 }}
                              exit={{
                                x: isLeftText ? "100%" : "-100%",
                                opacity: 0,
                              }}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                              className="absolute inset-0 z-[-1]"
                              style={{ backgroundColor }}
                            />

                            {/* Text Animation */}
                            <motion.span
                              key={`text-${value.id}-${index}`}
                              initial={{
                                y: 50,
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              exit={{
                                y: -50,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 1.2,
                                ease: "easeOut",
                              }}
                            >
                              {value.description}
                            </motion.span>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
