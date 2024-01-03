import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';
export default function Actions() {
  return (
    <>
      <div className="text-base font-bold font-jakarta capitalize mb-4">
        Actions
      </div>
      <div className="text-sm flex flex-col md:flex-row gap-3 mb-6">
        <button className="bg-[#f00c0c] w-full rounded-full  flex items-center justify-between text-white py-3 ps-4 pe-2">
          <span className="text-lg font-medium font-jakarta capitalize">
            deposite
          </span>
          <Arrow icon={<FaArrowUp />} />
        </button>
        <button className="bg-[#00ffe0] w-full  rounded-full flex items-center justify-between py-3 ps-4 pe-2">
          <span className="text-lg font-medium font-jakarta capitalize">
            withdraw
          </span>
          <Arrow icon={<FaArrowDown />} />
        </button>
      </div>
    </>
  );
}

function Arrow({ icon }) {
  return <span className="bg-white rounded-full text-black p-2">{icon}</span>;
}
