import IntroHeader from '../Components/IntorHeader';
import Actions from '../DashboardComponents/Actions';
import Services from '../DashboardComponents/Services';
import TransictionHistory from '../DashboardComponents/TransictionHistory';
import SwapCrypto from '../DashboardComponents/SwapCrypto';
function DashBoard() {
  return (
    <div className="text-xl uppercase block overflow-y-auto  w-[95%] relative  mx-auto ">
      <IntroHeader />
      <div className="flex xmd:flex-row flex-col gap-6 mt-5">
        <div className="flex flex-col  xmd:w-3/5 w-full shrink basis-auto grow ">
          <Services />
          <TransictionHistory />
        </div>
        <div className="xmd:w-2/5 shrink basis-auto w-full grow">
          <Actions />
          <SwapCrypto />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
