"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./HeroData";
import { IHero } from "./HeroDto";

export const Hero = () => {
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
  };

  return (
    <section
      aria-labelledby="category-heading"
      className="bg-white pt-[3.5rem] sm:hidden block min-h-screen"
    >
      <div className="mx-auto pb-24 sm:mt-[10rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="slider-container overflow-hidden">
          <Slider {...settings}>
            {slides.map((value: IHero) => (
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
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`absolute bottom-16 text-white text-3xl md:text-5xl font-extrabold tracking-tight ${
                    value.id % 2 === 0 ? "text-right w-1/2 right-[1rem] border border-red-300" : "left-4 text-left w-1/2 border border-amber-300"
                  }`}
                >
                  {value.title}
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
