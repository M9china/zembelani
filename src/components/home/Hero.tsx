"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./HeroData";
import { IHero } from "./HeroDto";

export const Hero = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      aria-labelledby="category-heading"
      className="bg-white pt-[3.5rem] sm:hidden block min-h-screen"
    >
      <div className="mx-auto pb-24 sm:mt-[10rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((value: IHero) => (
              <span key={value.id} className="pb-2">
                <div className="flex items-center">
                  <Image
                    width={500}
                    height={500}
                    className="object-cover relative object-center h-full brightness-65"
                    src={value.src}
                    alt="avatar"
                  />
                  {value.id % 2 === 0 ? (
                    <span className="absolute flex items-center justify-center opacity-70 w-[16rem] ml-[8.5rem] h-[8rem]">
                      <p className="text-center text-white text-2xl font-stretch-ultra-condensed">{value.title}</p>
                    </span>
                  ) : (
                    <span className="absolute flex items-center justify-center opacity-70 w-[16rem] h-[8rem]">
                      <p className='text-center text-white text-2xl font-stretch-ultra-condensed'>{value.title}</p>
                    </span>
                  )}
                </div>
              </span>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
