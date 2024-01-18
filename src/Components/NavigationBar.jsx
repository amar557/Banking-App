import Logo from './Logo';
import { CiGrid41, CiWallet } from 'react-icons/ci';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from 'react-icons/io';
import { IoWallet } from 'react-icons/io5';
import { FaServicestack } from 'react-icons/fa';
import { BsVoicemail } from 'react-icons/bs';
import { IoWifiOutline } from 'react-icons/io5';
import { MdBolt } from 'react-icons/md';
import { MdOutlineComputer } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const linksData = [
  {
    icon: <CiGrid41 />,
    link: 'dashboard',
    to: '/',
  },
  {
    icon: <CiWallet />,
    link: 'wallet',
    to: 'wallet',
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
    link: 'transiction',

    subMenu: true,
    subMenuItems: [
      { title: 'wallet transictions', icon: <IoWallet /> },
      { title: 'services transictions', icon: <FaServicestack /> },
    ],
  },
  {
    icon: <BsStars />,
    link: 'services',

    subMenu: true,

    subMenuItems: [
      { title: 'airtime', icon: <BsVoicemail /> },
      { title: 'internet', icon: <IoWifiOutline /> },
      { title: 'electricity', icon: <MdBolt /> },
      { title: 'tv subscription', icon: <MdOutlineComputer /> },
    ],
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
        isOpen ? 'top-[20%] left-72' : 'top-[20%] left-20'
      }  md:flex items-center justify-center hidden  z-50 bg-[#00ffe0] h-8 w-8 transition-all duration-300 ring-4 ring-white rounded-full `}
    >
      {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
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
        <Links
          link={data.link}
          key={i}
          icon={data.icon}
          to={data.to}
          isOpen={isOpen}
          subMenu={data.subMenu}
          subMenuItems={data.subMenuItems}
        />
      ))}
    </div>
  );
}

function OthersList({ isOpen }) {
  return (
    <div className="mx-auto xs:me-auto my-4">
      {othersData.map((data, i) => (
        <Links
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

function Links({ icon, link, to, isOpen, subMenu, subMenuItems }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  function ToggleMenu() {
    return setSubMenuOpen((open) => !open);
  }
  return (
    <>
      {subMenu ? (
        <div className="flex flex-col">
          <NavLink
            onClick={ToggleMenu}
            to={to}
            className="flex items-center gap-4 text-xl my-[15px] text-[#909090] p-3 hover:bg-[#eeeeee] transition-all duration-200 hover:rounded-lg"
          >
            <span className="text-2xl">{icon}</span>
            {isOpen && (
              <>
                <span className="capitalize md:block hidden grow w-full pe-11">
                  {link}
                </span>
                <span className="md:block hidden">
                  {subMenuOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </span>
              </>
            )}
          </NavLink>
          {subMenuOpen && (
            <>
              <span className="block">
                {subMenuItems.map((item, i) => (
                  <>
                    {isOpen ? (
                      <div
                        key={i}
                        className="bg-transparent md:block hidden hover:bg-white hover:cursor-pointer transition-all py-[10px] px-2 text-xl font-jakarta mb-1 ms-3 rounded-lg"
                      >
                        <Link>{item.title}</Link>
                      </div>
                    ) : (
                      <div>
                        <Link>{item.icon}</Link>
                      </div>
                    )}
                  </>
                ))}
              </span>
            </>
          )}
        </div>
      ) : (
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
      )}
    </>
  );
}

export default NavigationBar;
