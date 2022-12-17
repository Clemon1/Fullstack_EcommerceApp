import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../assets/img1.png";
import img2 from "../assets/img6.jpg";
import img3 from "../assets/img2.jpg";
import img4 from "../assets/xbox.jpg";
import img5 from "../assets/img5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

const Caurousel = () => {
  return (
    <Box width={"100%"} height={60} paddingBottom={20}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <Image
            width={"100%"}
            height={"60vh"}
            src={img1}
            alt='im1'
            objectFit={"cover"}
            rounded={10}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            height={"60vh"}
            src={img2}
            objectFit={"cover"}
            objectPosition={"center"}
            alt='im2'
            rounded={10}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            height={"60vh"}
            src={img3}
            objectFit={"cover"}
            objectPosition={"center"}
            alt='im3'
            rounded={10}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            height={"60vh"}
            src={img4}
            objectFit={"cover"}
            objectPosition={"bottom"}
            alt='im4'
            rounded={10}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={"100%"}
            height={"60vh"}
            src={img5}
            objectFit={"cover"}
            objectPosition={"center"}
            alt='im5'
            rounded={10}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Caurousel;
