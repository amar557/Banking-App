import NImg from '../assets/NY.svg';
import arrowImg from '../assets/arrow.svg';
import EtheriumImg from '../assets/etherium.svg';
import EtheriumBlack from '../assets/etherium-bg-black.svg';
import NairaBlack from '../assets/naira-bg-black.svg';
function SwapCrypto() {
  return (
    <>
      <div className="mb-4 capitalize font-bold text-xl font-jakarta">
        Swap Crypto
      </div>
      <div className="px-4  pb-8 pt-4 bg-[#f9f9f9] rounded-3xl">
        <Cards />
        <div className="flex justify-between text-sm my-6 text-[#00000080] ">
          <p className="text-xs capitalize ">exchange rate</p>
          <p className="text-xs font-medium text-black">1USDC = 9238NGN</p>
        </div>
        <SwapNowBtn />
      </div>
    </>
  );
}
function SwapNowBtn() {
  return (
    <div className=" swap_btn">
      <div>
        <img src={EtheriumBlack} alt="" />
      </div>
      <div> Swap now</div>
      <div>
        <img src={NairaBlack} alt="" />
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-col relative gap-3">
      <Card1 img={EtheriumImg} />
      <Card2 />
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={arrowImg}
          alt=""
          className="xs:h-24 xs:w-24 h-16 w-16 bg-white xs:border-[11px] border-[6px] rounded-full border-white"
        />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="h-48 w-full px-4  bg-[#c7c7c7]  flex items-center justify-center  my-auto rounded-3xl relative">
      <CardBody img={NImg} />
      <div className="p-3 absolute bottom-0 right-1/2  translate-x-1/2 rounded-3xl -mb-4 bg-[#f9f9f9] text-center">
        <div className="w-[76px] rounded-[30px]  h-[15px] bg-[#c7c7c7]"></div>
      </div>
    </div>
  );
}
function Card1({ img }) {
  return (
    <div className="h-48 w-full px-4 bg-[#627eea] text-white rounded-3xl relative flex items-center justify-center">
      <CardBody img={img} />
      <div className="p-3 absolute top-0 right-1/2  translate-x-1/2 rounded-3xl -mt-4 bg-[#f9f9f9] text-center">
        <div className="w-[76px] rounded-[30px]  h-[15px] bg-[#c7c7c7]"></div>
      </div>
    </div>
  );
}
function CardBody({ img }) {
  return (
    <div className="py-5 my-auto  w-full space-y-2">
      <p className="text-xs">you get</p>
      <div className="flex">
        <div className="flex justify-between w-full">
          <div className="flex gap-1">
            <img src={img} alt="" className="w-8 h-8" />
            <select
              name=""
              id=""
              className="h-8 w-14 focus:outline-0 sm:w-[74px] rounded-full border-white border pb-1 ps-1 text-white bg-transparent"
            >
              <option value="">usd</option>
            </select>
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-[3px] text-sm font-bold font-jakarta">
          37003.21 <span className="text-[9px] font-semibold"> NGn</span>
        </div>
      </div>
      <p className="text-[9px] font-bold flex flex-col gap-0 leading-3">
        <span>balance:</span>
        <span>748302</span>
      </p>
    </div>
  );
}
export default SwapCrypto;
