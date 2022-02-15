import React from 'react';
import data from './sfpopos-data.json';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import '../POPOSList/POPOSList.css';

const POPOSList = () => {
  const spaces = data.map((obj) => {
    const { title, address, images, hours } = obj;
    return (
      <POPOSSpace key={title} name={title} address={address} image={images[0]} hours={hours} />
    );
  });

  return <div className="POPOSList">{spaces}</div>;
};

export default POPOSList;
