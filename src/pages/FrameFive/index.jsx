import React from "react";

import { Text } from "components";

const FrameFivePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope gap-[50px] items-start justify-center mx-auto p-[81px] md:px-10 sm:px-5 w-full">
        <Text
          className="leading-[82.00px] mt-1 md:text-5xl text-[64px] text-black-900 w-[67%] sm:w-full"
          size="txtManropeExtraBold64"
        >
          Join our team today {" "}
        </Text>
        <div className="flex flex-col font-inter items-center max-w-[1002px] mb-[31px] mx-auto w-full">
          <Text
            className="leading-[40.00px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-full"
            size="txtInterRegular26"
          >
           Join our team today and unlock the financial potential and flexibility you deserve. Key Benefits - High Payouts, Flexible Schedule, Career Growth, Remote Work. Telecom. Transport. Retail. IT Services. Healthcare. Manufacturing. Freshers Can Apply. Media. Part Time Jobs. Infrastructure.
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameFivePage;
