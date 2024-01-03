import dataImg from '../assets/data.svg';
import DownloadImg from '../assets/download.svg';
import UploadImg from '../assets/download.svg';
import TVImg from '../assets/tv.svg';
import bitcoinImg from '../assets/bitcoin.svg';
import EtheriumImg from '../assets/etherium.svg';
import TronImg from '../assets/tron.svg';
import tronCurrImg from '../assets/tron.svg';

const transictionData = [
  {
    pic1: dataImg,
    pic2: bitcoinImg,
    class: 'yellow-shadow',
  },
  {
    pic1: DownloadImg,
    pic2: TronImg,
    class: 'aqua-shadow',
  },
  {
    pic1: TVImg,
    pic2: tronCurrImg,
    class: 'black-shadow',
  },
  {
    pic1: UploadImg,
    pic2: EtheriumImg,
    class: 'red-shadow',
  },
  {
    pic1: dataImg,
    pic2: bitcoinImg,
    class: 'yellow-shadow',
  },
];

function TransictionHistory() {
  return (
    <div className="mb-6">
      <div className="flex justify-between mt-6 mb-4">
        <div className="text-xl font-bold capitalize ">transiction history</div>
        <button className="text-sm">view all</button>
      </div>
      <div className="bg-[#f9f9f9] p-[13px] rounded-xl">
        <div className="flex flex-col">
          {transictionData.map((data, i) => (
            <TransictionCard
              key={i}
              image1={data.pic1}
              image2={data.pic2}
              styling={data.class}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function TransictionCard({ image1, image2, styling }) {
  return (
    <div
      className={`relative flex flex-col xs:flex-row xs:justify-between gap-6 py-[6px] pe-[6px] md:p-4 ps-5 bg-white rounded-xl mb-2 yellow-shadow ${styling}
    `}
    >
      <div className="flex flex-col md:flex-row gap-[14px]">
        <div className="flex gap-[14px] ">
          <div className="flex flex-col">
            <div className="font-bold text-lg">nov</div>
            <div className="text-xs font-normal text-primary">26th</div>
          </div>
          <img src={image1} alt="dataimage" />
        </div>
        <div className="font-jakarta">
          <div className="mb-[3px] font-normal text-base ">swap</div>
          <div className="text-sm  font-normal text-primary">0.00x000</div>
        </div>
      </div>
      <div>
        <div className="mb-[6px] text-sm  font-normal text-primary">
          transictionID : 2637abk
        </div>
        <div className="flex gap-[6px] text-sm font-normal">
          <span>2.37 BTC </span>
          <img src={image2} alt="currency" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
export default TransictionHistory;
