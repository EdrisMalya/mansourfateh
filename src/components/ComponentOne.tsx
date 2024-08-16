"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ComponentOne = () => {
  const images = ["/img/image1.jpeg", "/img/image2.jpeg", "/img/image3.jpeg"];
  const [selectedImage, setSelectedImage] = useState(0);

  const handleNextAndBackImage = (type: string | "next" | "back") => {
    switch (type) {
      case "next":
        if (selectedImage >= 0 && selectedImage < images.length - 1) {
          setSelectedImage((prevState) => prevState + 1);
        }
        break;
      case "back":
        if (selectedImage !== 0) {
          setSelectedImage((prevState) => prevState - 1);
        }
    }
  };

  return (
    <section className={"flex items-center flex-row gap-12"}>
      <div className={"flex flex-col justify-center flex-1"}>
        <h2 className={"text-4xl font-bold"}>
          Providing Reliable Railway Maintenance Services
        </h2>
        <p className={"text-lg mt-12"}>
          At Mansour Fateh, we are committed to safety, efficiency, and
          innovation in the railway industry. With our expert team and years of
          experience, we ensure the highest standards of quality and performance
          for your operations.
        </p>
        <div className={"mt-8"}>
          <Link
            href={"/about"}
            className={"bg-black text-white px-5 py-3 w-fit"}
          >
            Lear More
          </Link>
        </div>
      </div>
      <div className={"flex-1"}>
        <Carousel>
          <CarouselContent>
            {images.map((img) => (
              <CarouselItem key={img}>
                <img src={img} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ComponentOne;
