/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Badge } from 'react-bootstrap';
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaRegClock,
  FaRegUserCircle,
} from 'react-icons/fa';
import style from '../ScheduleCard/schedule.module.scss';

type ScheduleCardProp = {
  mode?: string;
  data?: any;
};

export default function ScheduleCard({ mode, data }: ScheduleCardProp) {
  return (
    <>
      <div className={`${style.left_detail}`}>
        <div
          className={`${mode === 'transparant' ? ' transparant ' : ''} ${
            style.des
          }`}
        >
          <div className="p-3 d-flex  align-items-center ">
            <img src={data?.profile} alt="profile" />
            <div className={`ms-4 ${style.meeting_info_container}`}>
              <div>
                <span>
                  <Badge bg="warning" text="dark" className="mb-2">
                    {data?.status}
                  </Badge>
                </span>
                <span className="ms-2">
                  <FaRegClock size={20} />
                  <span>
                    {' '}
                    ម៉ោង: <b>{data?.startTime}</b>
                  </span>
                </span>
              </div>
              <h4 className="mt-1">{data?.title}</h4>
              <div>
                <span>
                  <FaCalendar size={20} />
                </span>
                <span className={`ms-3 ${style.meeting_date}`}>
                  {data?.meetingDate}
                </span>
              </div>
              <p></p>
              <hr style={{ border: '1px solid #ced6e0' }} />
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="me-2 ">
                    <FaRegUserCircle size={20} />
                  </span>
                  <span>
                    ប្រធានអង្គប្រជុំ: <b> {data?.host}</b>
                  </span>
                </div>
                <div>
                  <span className="me-2">
                    <FaMapMarkerAlt size={20} />
                  </span>
                  <span>
                    បន្ទប់ប្រជុំ​: <b>{data?.room}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
