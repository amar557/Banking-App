import dataImg from '../assets/data.svg';
function Notification() {
  return (
    <div className="absolute top-[6.25rem] right-7 rounded-3xl w-2/6 p-6 bg-white shadow-2xl overflow-y-scroll h-[70vh]">
      <header className="flex items-center justify-between mb-8">
        <span className="capitalize">notification</span>
        <span className="text-[#29d4bf] ">Mark all as read</span>
      </header>

      {Array.from({ length: 20 }).map((data, i) => (
        <Message key={i} />
      ))}
      {/* <Message /> */}
    </div>
  );
}

function Message() {
  return (
    <div className="flex items-center justify-between bg-[#edfdfd] p-4 mb-4 rounded-2xl">
      <div className="basis-1/4">
        <img src={dataImg} alt="" />
      </div>
      <div className="basis-11/12">
        <div className="font-medium flex justify-between items-center">
          <span>Swap Confirmed</span>
          <span className="text-sm text-[#909090]">22 hours ago</span>
        </div>
        <div className="text-sm">
          Your Amount of 29 USDT TRC 20 Testnet has been successfully swapped
          for 43,543.49999999999 NGN
        </div>
      </div>
    </div>
  );
}

export default Notification;
