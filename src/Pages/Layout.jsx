import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import { useState } from 'react';

function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  function handleNavbar() {
    setIsOpen((open) => !open);
  }
  return (
    <>
      <div className="flex">
        <div className=" bg-orange-700 h-screen ">
          <NavigationBar handleNavbar={handleNavbar} isOpen={isOpen} />
        </div>
        <div
          className={`flex flex-col ms-[75px] xs:ms-[120px] ${
            !isOpen ? 'md:ms-[100px]' : 'md:ms-[300px]'
          }  w-full  mt-32 `}
        >
          <div className="grow basis-auto shrink w-full ">
            <Header />
          </div>
          <div className=" w-[97%] xs:w-[97%] grow shrink">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
