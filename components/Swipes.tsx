"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";

export default function Slides(){
    const sliders=[
        {
            id:0,
            image: '/food1-lg.jpg',
            imgS:'/food1-md-sm.jpg',
            msg:'Get Meals By Main Ingredient',
        },
        {
            id:1,
            image:'/food2-lg.jpg',
            imgS:'/food2-md-sm.jpg',
            msg:'Or Find Meals By Categories',
        },
        {
            id:2,
            image:'/food3-lg.jpg',
            imgS:'/food3-md-sm.jpg',
            msg:'You Can Also Find Meals By Country',
        },
    ]
    return (
      <div>
          <Swiper
           modules={[Navigation,Pagination,Autoplay]}
           spaceBetween={0}
           slidesPerView={1}
           navigation
           pagination={{ clickable: true }}
           loop={true}
           autoplay={{
              delay:3500,
           }}
         >
          {
            sliders.map(page =>{
                return (
                    <SwiperSlide key={page.id}>
                        <div className="hidden lg:block">
                            <Image  src={page.image} alt="food image" width={1144}  height={672}/>
                        </div>
                        <div className=" lg:hidden block">
                            <Image   src={page.imgS} alt="food image"  width={820} height={620} />
                        </div>
                        <span className="text-3xl text-center absolute text-stone-100  bg-slate-700 p-4 opacity-90 sm:bg-transparent sm:p-0 sm:opacity-100 bottom-10 right-1/2 transform translate-x-1/2 sm:transform-none sm:top-1/3 sm:left-12 md:left-20 lg:left-40 flex flex-col items-center sm:items-start sm:text-5xl md:text-6xl lg:text-7xl my-4">
                              {page.msg}
                        </span>
                    </SwiperSlide>
                )
            })
          }  
        </Swiper>
      </div>
    )
}