import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./ui/TestimonialCard";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  useEffect(() => {
  }, [])

  return (
    <div className="w-full bg-light-2 py-[100px] flex justify-center">
      <div className="w-[90%] flex flex-col  gap-[100px]">
        <div className="w-full flex justify-between">
          <p className="text-24-semibold text-dark-3">
            What our client say about <span className="text-blue-1">Pacific Hunt</span>
          </p>

          <div className="flex gap-[20px] items-center justify-center">
            <div
              className={`${isFirst ? "disabled" : ""}`}
              onClick={handlePrev}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29 22C29.5523 22 30 21.5523 30 21C30 20.4477 29.5523 20 29 20V22ZM13 21L12.2929 20.2929C11.9024 20.6834 11.9024 21.3166 12.2929 21.7071L13 21ZM19.7071 15.7071C20.0976 15.3166 20.0976 14.6834 19.7071 14.2929C19.3166 13.9024 18.6834 13.9024 18.2929 14.2929L19.7071 15.7071ZM18.2929 27.7071C18.6834 28.0976 19.3166 28.0976 19.7071 27.7071C20.0976 27.3166 20.0976 26.6834 19.7071 26.2929L18.2929 27.7071ZM40 21C40 31.4934 31.4934 40 21 40V42C32.598 42 42 32.598 42 21H40ZM21 40C10.5066 40 2 31.4934 2 21H0C0 32.598 9.40202 42 21 42V40ZM2 21C2 10.5066 10.5066 2 21 2V0C9.40202 0 0 9.40202 0 21H2ZM21 2C31.4934 2 40 10.5066 40 21H42C42 9.40202 32.598 0 21 0V2ZM29 20H13V22H29V20ZM13.7071 21.7071L19.7071 15.7071L18.2929 14.2929L12.2929 20.2929L13.7071 21.7071ZM12.2929 21.7071L18.2929 27.7071L19.7071 26.2929L13.7071 20.2929L12.2929 21.7071Z"
                  fill="#3C3D3D"
                />
              </svg>
            </div>

            <div className="custom-pagination text-22-medium tracking-[-0.02rem]"></div>

            <div className={`${isLast ? "disabled" : ""}`} onClick={handleNext}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 22C12.4477 22 12 21.5523 12 21C12 20.4477 12.4477 20 13 20V22ZM29 21L29.7071 20.2929C30.0976 20.6834 30.0976 21.3166 29.7071 21.7071L29 21ZM22.2929 15.7071C21.9024 15.3166 21.9024 14.6834 22.2929 14.2929C22.6834 13.9024 23.3166 13.9024 23.7071 14.2929L22.2929 15.7071ZM23.7071 27.7071C23.3166 28.0976 22.6834 28.0976 22.2929 27.7071C21.9024 27.3166 21.9024 26.6834 22.2929 26.2929L23.7071 27.7071ZM2 21C2 31.4934 10.5066 40 21 40V42C9.40202 42 0 32.598 0 21H2ZM21 40C31.4934 40 40 31.4934 40 21H42C42 32.598 32.598 42 21 42V40ZM40 21C40 10.5066 31.4934 2 21 2V0C32.598 0 42 9.40202 42 21H40ZM21 2C10.5066 2 2 10.5066 2 21H0C0 9.40202 9.40202 0 21 0V2ZM13 20H29V22H13V20ZM28.2929 21.7071L22.2929 15.7071L23.7071 14.2929L29.7071 20.2929L28.2929 21.7071ZM29.7071 21.7071L23.7071 27.7071L22.2929 26.2929L28.2929 20.2929L29.7071 21.7071Z"
                  fill="#3C3D3D"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-[105.3%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className={"mySwiper"}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            pagination={{
              el: '.custom-pagination',
              type: "fraction",
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 32,
              },
            }}
          >
            {testimonials.map((item) => {
              return (
                <SwiperSlide key={item.key}>
                  <TestimonialCard
                    key={item.key}
                    comment={item.comment}
                    name={item.clientname}
                    title={item.clienttitle}
                    pfp={item.profilepic}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
