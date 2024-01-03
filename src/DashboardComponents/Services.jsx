import { LuRouter } from 'react-icons/lu';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { AiOutlineUsb } from 'react-icons/ai';
import { TbBulb } from 'react-icons/tb';

const serviceBoxesData = [
  {
    icon: <LuRouter />,
    title: 'airtime',
  },
  {
    icon: <HiOutlineComputerDesktop />,
    title: 'TV Sub ',
  },
  {
    icon: <AiOutlineUsb />,
    title: 'Data plan',
  },
  {
    icon: <TbBulb />,
    title: 'electricity',
  },
];

export default function Services() {
  return (
    <div className="text-sm ">
      <div className="font-bold capitalize  font-base font-jakarta">
        Services
      </div>
      <div className="flex gap-4 flex-col xs:flex-row">
        {serviceBoxesData.map((data, i) => (
          <ServieBox icon={data.icon} title={data.title} key={i} />
        ))}
      </div>
    </div>
  );
}

function ServieBox({ icon, title }) {
  return (
    <div className="box">
      <div className="text-lg">{icon}</div>
      <div className="capitalize text-[16px] font-jakarta">{title}</div>
    </div>
  );
}
