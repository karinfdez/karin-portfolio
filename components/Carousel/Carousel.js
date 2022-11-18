import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
export default function Carousel({slidersPerView, carouselItems}) {
  return (
      <Swiper
        slidesPerView={slidersPerView}
        spaceBetween={30}
        className="flex md:h-[200px] xl:h-[300px]"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2
          },
          1025: {
            slidesPerView: 3
          }
        }}
        modules={[ Pagination]}
      >
        {carouselItems?.length > 0 && carouselItems.map(({name, image, url,id}) => (
            <div key={id}>
                <SwiperSlide>
                    <div className="flex relative h-full w-full">
                        <Image alt="project portfolio" width={400} height={200} className="w-full object-cover rounded-lg" src={image[0]?.url}/>
                        <div className="absolute top-0 left-0 w-full h-full inset-0 ring-1 ring-inset space-y-2 ring-black/10 rounded-lg bg-black hover:opacity-70 opacity-0 ease-in-out duration-1000 flex flex-col justify-center items-center">
                            <p className="text-white text-md">{name}</p>
                            <Link id="style-2" data-replace="See more" className="text-white text-md text-center" href={url}><span>See more</span></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        ))}
    </Swiper>
  )
}