import NSymbol from '../assets/N.svg';
export default function IntroHeader() {
  return (
    <div className="header lg:px-4 xl:px-6 ">
      <div className="font-jakarta">
        <div className="text-[12px] font-semibold">payremit wallet</div>
        <div className="sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          hello! alexander
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
            value={'btc'}
            className="rounded-lg active:outline-0 border-0 focus:outline-0 text-black bg-[#f9f9f9] p-2 h-5 "
          >
            <option
              value="kjadskj"
              className="uppercase text-black text-sm border-0"
            >
              btc
            </option>
            <option
              value="kjsakd"
              className="uppercase text-black text-sm border-0"
            >
              mgn
            </option>
            <option
              value="jdsk"
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
