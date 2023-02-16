/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Badge } from 'react-bootstrap';
import { FaRegUserCircle, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { BiMap } from 'react-icons/Bi';
export default function Home() {
  return (
    <>
      <Head>
        <title>Meeting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="meeting-screen container-fluid">
        <div className="row" style={{ height: '100vh' }}>
          <div className="left col-md-5 ">
            <div className="logo">
              <img src="/moclogo.png" alt="moclogo" />
            </div>
            <div className="left-detail">
              <div className="des">
                <div className="p-3 d-flex align-items-center ">
                  <img src="/profile.jpg" alt="profile" />
                  <div className="ms-4 meeting-info-container">
                    <div>
                      <span>
                        <Badge bg="warning" text="dark" className="mb-2">
                          កិច្ចប្រជុំបន្ទាប់
                        </Badge>
                      </span>
                      <span className='ms-2'>
                        <FaRegClock />
                        <span> 8:00AM-10:00AM</span>
                      </span>
                    </div>
                    <h4 className="mt-1">កិច្ចប្រជុំពាណិជ្ជកម្មអន្តរជាតិ </h4>
                    <p className="meeting-date">
                      ថ្ងៃច័ន្ទ ទី១៦​ ខែកុម្ភះ​ ឆ្នាំ​២០២៣
                    </p>
                    <p></p>
                    <hr style={{ border: '1px solid #ced6e0' }} />
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="me-2 ">
                          <FaRegUserCircle size={20}/>
                        </span>
                        <span>
                          ប្រធានអង្គប្រជុំ: <b> Mr.Sok Dara</b>
                        </span>
                      </div>
                      <div>
                        <span className="me-2">
                          <FaMapMarkerAlt size={20}/>
                        </span>
                        <span>
                          បន្ទប់ប្រជុំ​: <b>អង្គរវត្ត</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-md-7">
            {/* <div className="right-detail">
              <div className="des">
                <div className="py-2 d-flex align-items-center justify-content-center">
                  <img src="/profile.jpg" alt="profile" />
                  <div className="ms-5">
                    <h1>Coming soong</h1>
                    <h4>Are you ready?</h4>
                    <p>
                      Ever wanted to impresgs your audience at first view? Use
                      this unique and beautiful website template.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
