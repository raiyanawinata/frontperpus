// import { useState } from "react";
// import books from "../../../assets/books.png";
// import "./card.css";
// import { faBook } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const numberWithSpaces = (x) => {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// };

// const StatisticsCard = () => {
//   const [statistics, setStatistics] = useState([
//     {
//       name: 'Koleksi Buku',
//       value: 1500,
//       percentage: 4.07,
//       icon: faBook,
//       growth: 'up'
//     },
//     {
//       name: 'Buku di Pinjam',
//       value: 478520,
//       percentage: 0.24,
//       icon: faBook,
//       growth: 'up'
//     },
//   ]);

//   return (
//     <div className='d-flex justify-content-center flex-wrap'>
//       {statistics.map((stat, index) => (
//         <div
//           key={index}
//           className={'card py-3 px-4 mb-2 mb-4'}
//           style={{ width: "250px", marginTop: "20px", marginLeft:"5px"}}
//         >
//           <div className={'d-flex justify-content-between'}>
//             <div className={'statIcon'}>
//             <FontAwesomeIcon icon={faBook} style={{ color: 'white', height: '90px' }} />
//             </div>
//             <div className={'text-nowrap'}>
//               <h3 className={'statValue mb-0'}>{numberWithSpaces(stat.value)}</h3>
//               <p className={'statName'}>{stat.name}</p>
              
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatisticsCard;

import React, { useState, useEffect } from "react";
import books from "../../../assets/books.png";
import "./card.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TabelNav from "../tabel/TabelNav";


const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const StatisticsCard = () => {
  const [statistics, setStatistics] = useState([
    {
      name: 'Koleksi Buku',
      value: 1500,
      percentage: 4.07,
      icon: faBook,
      growth: 'up'
    },
    {
      name: 'Buku di Pinjam',
      value: 0,
      percentage: 0.24,
      icon: faBook,
      growth: 'up'
    },
  ]);

  useEffect(() => {
    const bukuDipinjamCount = TabelNav.filterData().length; // Mengambil jumlah data buku yang sedang dipinjam dari TabelNav

    setStatistics((prevStatistics) => {
      const updatedStatistics = [...prevStatistics];
      updatedStatistics[1].value = bukuDipinjamCount;
      return updatedStatistics;
    });
  }, []);

  return (
    <div className='d-flex justify-content-center flex-wrap'>
      {statistics.map((stat, index) => (
        <div
          key={index}
          className={'card py-3 px-4 mb-2 mb-4'}
          style={{ width: "250px", marginTop: "20px", marginLeft:"5px"}}
        >
          <div className={'d-flex justify-content-between'}>
            <div className={'statIcon'}>
              <FontAwesomeIcon icon={faBook} style={{ color: 'white', height: '90px' }} />
            </div>
            <div className={'text-nowrap'}>
              <h3 className={'statValue mb-0'}>{numberWithSpaces(stat.value)}</h3>
              <p className={'statName'}>{stat.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCard;
