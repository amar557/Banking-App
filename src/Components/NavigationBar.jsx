import Logo from './Logo';
import { CiGrid41, CiWallet } from 'react-icons/ci';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

const linksData = [
  {
    icon: <CiGrid41 />,
    link: 'dashboard',
    to: '/',
  },
  {
    icon: <CiWallet />,
    link: 'wallet',
    to: '/aksjf',
  },
  {
    icon: <FaArrowUp />,
    link: 'deposite',
    to: 'kdalk',
  },
  {
    icon: <FaArrowDown />,
    link: 'withdraw',
    to: 'kjSDK',
  },
  {
    icon: <FiClock />,
    link: 'services',
    to: 'skjadskfj',
  },
  {
    icon: <BsStars />,
    link: 'reviews',
    to: 'kdjsfkaj',
  },
];

const othersData = [
  {
    icon: <IoSettingsOutline />,
    link: 'settings',
    to: '',
  },
  {
    icon: <MdOutlineLogout />,
    link: 'logout',
    to: '',
  },
];

function NavigationBar({ handleNavbar, isOpen }) {
  return (
    <div
      className={`pt-9 px-1 xs:pt-14 pb-10 bg-[#f9f9f9] overflow-x-hidden scrollbar-track-transparent scrollbar-thumb-black scrollbar-thin overflow-y-auto ${
        isOpen ? ' md:w-[300px]' : ' md:w-[100px]'
      }  h-screen transition-all  duration-300 z-30 fixed xs:px-6 flex items-center  flex-col `}
    >
      <Logo isOpen={isOpen} />
      <NavControlerButton handleNavbar={handleNavbar} isOpen={isOpen} />
      <div className="my-10 bg-[#eeee] h-[1px] opacity-60 w-full"></div>
      <Heading isOpen={isOpen}>menu</Heading>
      <MenuList isOpen={isOpen} />
      <Heading isOpen={isOpen}>others</Heading>
      <OthersList isOpen={isOpen} />
    </div>
  );
}
function NavControlerButton({ handleNavbar, isOpen }) {
  return (
    <button
      onClick={handleNavbar}
      className={`fixed ${
        isOpen ? 'top-[35%] left-[16%]' : 'top-[35%] left-[6%]'
      }  md:flex items-center justify-center hidden  z-50 bg-[#00ffe0] h-6 w-6 transition-all duration-300 ring-4 ring-white rounded-full `}
    >
      <IoIosArrowBack />
    </button>
  );
}

function Heading({ children, isOpen }) {
  return (
    <div
      className={`uppercase text-[#909090] ${
        !isOpen ? ' md:mx-auto' : ' md:mx-0 md:me-auto'
      }   mx-auto xs:me-auto text-sm font-sans`}
    >
      {children}
    </div>
  );
}
function MenuList({ isOpen }) {
  return (
    <div className="mx-auto xs:me-auto my-4">
      {linksData.map((data, i) => (
        <Link
          link={data.link}
          key={i}
          icon={data.icon}
          to={data.to}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
}

function OthersList({ isOpen }) {
  return (
    <div className="mx-auto xs:me-auto my-4">
      {othersData.map((data, i) => (
        <Link
          link={data.link}
          key={i}
          icon={data.icon}
          to={data.to}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
}

function Link({ icon, link, to, isOpen }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-4 text-xl my-[15px] text-[#909090] p-3 hover:bg-[#eeeeee] transition-all duration-200 hover:rounded-lg "
    >
      <span className="text-2xl">{icon}</span>
      {isOpen && (
        <span className="capitalize md:block hidden grow w-full pe-11">
          {link}
        </span>
      )}
    </NavLink>
  );
}
export default NavigationBar;
