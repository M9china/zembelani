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
    <section
      aria-labelledby="category-heading"
      className="bg-white pt-[3.5rem] sm:hidden block"
    >
      <div className="mx-auto pb-24 sm:mt-[12rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((value: IHero) => (
              <span key={value.id} className="pb-2">
                <div className="flex justify-center items-center">
                  <Image
                    width={500}
                    height={500}
                    className="object-cover relative object-center h-[13.5 rem] group-hover:opacity-75"
                    src={value.src}
                    alt="avatar"
                  />
                  {value.id % 2 === 0 ? (
                    <span className="absolute flex items-center justify-center mt-[6rem] w-[16rem] bg-blue-500 h-[8rem]">
                      <p className="text-center">{value.title}</p>
                    </span>
                  ) : (
                    <span className="absolute flex items-center justify-center mt-[6rem] w-[16rem] bg-red-500 h-[8rem]">
                      <p className='text-center'>{value.title}</p>
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
