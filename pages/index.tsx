/* eslint-disable @next/next/no-img-element */

import ScheduleCard from '@/components/ScheduleCard';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);
import { data } from '@/data/data';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
export default function Home() {
  return (
    <>
      <div className="meeting-screen container-fluid">
        <div className="meeting-detail row">
          <div className="left col-12 col-lg-5 ">
            <div className="header">
              <div className="logo">
                <img src="/moclogo.png" alt="moclogo" />
              </div>
              <div className="date">
                <p>ថ្ងៃសុក្រ ១២រោច ខែមាឃ ឆ្នាំខាល ចត្វាស័ក ពុទ្ធសករាជ​ ២៥៦៦</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <CarouselProvider
                visibleSlides={3}
                totalSlides={data.length}
                orientation="vertical"
                naturalSlideWidth={400}
                naturalSlideHeight={140}
                isPlaying={true}
                infinite={true}
                lockOnWindowScroll={true}
              >
                <Slider>
                  {data.map((item, idx) => {
                    return (
                      <>
                        <Slide index={idx}>
                          <ScheduleCard data={item} />
                        </Slide>
                      </>
                    );
                  })}
                </Slider>
              </CarouselProvider>
            </div>
          </div>
          <div className="right col-12 col-lg-7">
            <div className="right-detail">
              <div className="des_schedule">
                <ScheduleCard mode="transparant" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
