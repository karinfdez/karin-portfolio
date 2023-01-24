import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export default function Carousel({ slidersPerView, carouselItems }) {
  return (
    <Swiper
      spaceBetween={30}
      className="flex"
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
    >
      {carouselItems?.length > 0 &&
        carouselItems.map(({ name, image, url, id }) => (
          <SwiperSlide key={id} className="w-full">
            <div className="relative h-full">
              <Image
                alt="project portfolio"
                width={400}
                height={200}
                className="object-cover rounded-[8px] h-full w-full"
                src={image[0]?.url}
              />
              <div className="absolute top-0 left-0 w-full h-full inset-0 ring-1 ring-inset space-y-2 ring-white/10 rounded-lg bg-black hover:opacity-70 opacity-0 ease-in-out duration-1000 flex flex-col justify-center items-center">
                <p className="text-white text-md">{name}</p>
                <Link
                  id="style-2"
                  data-replace="See more"
                  className="text-white text-md text-center"
                  href={url}
                >
                  <span>See more</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
