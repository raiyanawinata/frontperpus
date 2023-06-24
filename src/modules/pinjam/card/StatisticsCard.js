import {useState} from "react";
// import styled from "styled-components";

import books from '../../../assets/books.png';
import './card.css';


 
const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const StatisticsCard = () => {
    const [statistics, setStatistics] = useState([
        {
            name: 'Koleksi Buku',
            value: 1500,
            percentage: 4.07,
            icon: books,
            growth: 'up'
        },
        {
            name: 'Buku di Pinjam',
            value: 478520,
            percentage: 0.24,
            icon:books,
            growth: 'up'
        },

    ])
  return (
      <div className='d-flex justify-content-between flex-wrap'>
          {
              statistics.map((stat, index) =>

                  (<div key={index} className={'card py-3 px-4 mb-2'} style={{width:"250px", marginLeft:"60px", marginRight:"50px", marginTop:"20px"}}>
                      <div className={'d-flex justify-content-between'}>
                          <div className={'statIcon'}>
                              <img src={stat.icon} alt="" style={{height:"90px"}}/>
                          </div>
                          <div className={'text-nowrap'}>
                              <h3 className={'statValue mb-0'}>{numberWithSpaces(stat.value)}</h3>
                              <p className={'statName'}>{stat.name}</p>
                              {/* <div className={stat.growth}>
                                  { stat.growth !== 'down' ?  (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="feather feather-trending-up">
                                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                      <polyline points="17 6 23 6 23 12"></polyline>
                                  </svg>) : (
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                           stroke-linejoin="round" className="feather feather-trending-down">
                                          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                          <polyline points="17 18 23 18 23 12"></polyline>
                                      </svg>
                                  )}
                              </div> */}
                          </div>
                      </div>


                  </div>)

              )
          }

      </div>
  )
}
export default StatisticsCard;
