"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./HeroData";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section aria-labelledby="category-heading" className="bg-white pt-[3.5rem] sm:hidden block">
      <div className="mx-auto pb-24 sm:mt-[12rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((value: any) => (
              <span
                key={value.alt}
                className="flex flex-col justify-center pb-2"
              >
                <div className="relative flex justify-center">
                  <Image
                    width={500}
                    height={500}
                    className="object-cover object-center h-[13rem] group-hover:opacity-75"
                    src={value.src}
                    alt="avatar"
                  />
                </div>
              </span>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
