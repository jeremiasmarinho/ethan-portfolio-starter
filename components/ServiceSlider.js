import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Sites institucionais",
    description:
      "Apresentam a sua empresa, sua missão, visão, valores, história, depoimentos, etc.",
  },
  {
    icon: <RxPencil2 />,
    title: "Sites responsivos",
    description:
      "Adaptam a qualquer tamanho de tela, seja de um computador ou celular.",
  },
  {
    icon: <RxDesktop />,
    title: "Sites e-commerce",
    description:
      "Permitem a venda de produtos ou serviços pela internet e com segurança.",
  },
  {
    icon: <RxReader />,
    title: "Personalizados",
    description:
      "Atendem às suas demandas específicas, seja para um evento, uma campanha, etc.",
  },
];

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              <div className="mb-8">
                <div className="mb-2 text-base xl:text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
