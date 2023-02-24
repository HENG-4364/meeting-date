/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Badge } from 'react-bootstrap';
import {
  FaRegUserCircle,
  FaMapMarkerAlt,
  FaRegClock,
  FaCalendar,
} from 'react-icons/fa';
import { BiMap } from 'react-icons/Bi';
import ScheduleCard from '@/components/ScheduleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);
import Clock from '@/components/Time';
import { data } from '@/data/data';
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
                <p style={{ float: 'right' }}>{/* <Clock /> */}</p>
              </div>
            </div>
            <div className='overflow-hidden'>
              <Swiper
              loop={true}
                direction="vertical"
                slidesPerView={3}
                autoplay={{
                  delay: 4000,
                }}
                
              >
                {data.map((item) => {
                  return (
                    <>
                      <SwiperSlide >
                        <ScheduleCard data={item} />
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
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
