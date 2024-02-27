import { useState } from 'react';
import NSymbol from '../assets/N.svg';
export default function IntroHeader({ page }) {
  const [value, setValue] = useState('mgt');
  // console.log(value);
  function manageOptions(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  return (
    <div className="header lg:px-4 xl:px-6 ">
      <div className="font-jakarta">
        <div className="text-[12px] font-semibold">payremit wallet</div>
        <div className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          {page}
        </div>
      </div>
      <div>
        <div className="text-xs flex justify-start xs:justify-end grow w-full ">
          Total assets
        </div>
        <div className="  flex items-center gap-2">
          <img src={NSymbol} alt="currency symbol" className="h-4" />
          <span className="text-xl md:text-2xl lg:text-3xl">38,920.84</span>
          <select
            name=""
            id=""
            onChange={manageOptions}
            className="rounded-lg active:outline-0 border-0 focus:outline-0 text-black bg-[#f9f9f9] p-2 h-5 "
          >
            <option
              value="btc"
              className="uppercase text-black text-sm border-0"
            >
              btc
            </option>
            <option
              value="mgn"
              className="uppercase text-black text-sm border-0"
            >
              mgn
            </option>
            <option
              value="usd"
              className="uppercase text-black text-sm border-0"
            >
              usd
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
