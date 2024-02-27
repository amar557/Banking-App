import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { GoBellFill } from 'react-icons/go';
import lightModeImg from '../assets/download.png';
import nightModeImg from '../assets/nightMode.png';
import ProfilePic from '../assets/profile.jpg';
import Notification from './Notification';
function Header() {
  const [showNotification, setShowNotification] = useState(false);
  function handlNotificationBar() {
    setShowNotification((data) => !data);
  }
  return (
    <div className="grow w-full p-[30px] flex justify-end items-center bg-white gap-x-5 fixed right-0 top-0 z-20 ">
      <LightModeButton />
      <Profile />
      <NotificationButton handlNotificationBar={handlNotificationBar} />
      {showNotification && <Notification />}
    </div>
  );
}

function LightModeButton() {
  const [theme, setTheme] = useState(true);
  function ChangeTheme() {
    setTheme((currentTheme) => !currentTheme);
  }

  return (
    <button onClick={ChangeTheme} className="hover:cursor-pointer p-1">
      {theme ? (
        <img src={lightModeImg} alt="jadks" className="h-8 md:h-11" />
      ) : (
        <img src={nightModeImg} alt="kasjfk" className="h-8 md:h-11 " />
      )}
    </button>
  );
}
function Profile() {
  return (
    <div className="hidden xs:flex items-center justify-evenly gap-[10px] md:gap-8 border rounded-full pt-2 pe-4 pb-2 ps-2">
      <div>
        <img src={ProfilePic} alt="" className="h-10 max-w-full rounded-full" />
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-x-4">
          <span className="text-[20px] capitalize font-jakarta">alexander</span>
          <span className="bg-[#00665a] flex items-center rounded-md gap-1 p-1 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.5 3.25L8.66667 6.5L11.375 4.33333L10.2917 9.75H2.70833L1.625 4.33333L4.33333 6.5L6.5 3.25Z"
                  stroke="#FFC960"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="text-[#ffc65f] text-[10px]">pro</span>
          </span>
        </div>
        <div className="text-[12px] text-[#909090]">alexander@gmail.com</div>
      </div>
      <button className="bg-[#eeeeee] h-10 w-10 rounded-full flex items-center justify-center">
        <IoChevronDown />
      </button>
    </div>
  );
}

function NotificationButton({ handlNotificationBar }) {
  return (
    <button
      className="bg-[#eeeeee]  h-10 min-w-10 rounded-[14px] p-1 flex items-center justify-center text-xl"
      onClick={handlNotificationBar}
    >
      <GoBellFill />
    </button>
  );
}
export default Header;
