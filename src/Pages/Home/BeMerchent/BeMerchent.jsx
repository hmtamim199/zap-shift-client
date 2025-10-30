import React from "react";

import location from "../../../assets/location-merchant.png";

const BeMerchent = () => {
  return (
    <div className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat p-20 bg-[#03373D] text-white rounded-4xl my-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={location} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time. thank you
          </p>
          <button className="btn bg-[#CAEB66] rounded-full mr-2">
            Become A Merchent
          </button>
          <button className="btn bg-[#CAEB66]  rounded-full">
            Become A Merchent
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeMerchent;
