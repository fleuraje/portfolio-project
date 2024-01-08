import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";

const Sidenav = () => {
  //setting our Navbar
  const [nav, setNav] = useState(false);
  // function that handles state of our Navbar by setting our state to the opposite of the current value
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    //on click we want to handle the nav bar from the right 
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {
        //if our nav state is true then display some information, if it is not true display something else
        nav ? (
          <div className='fixed w-full h-screen bg-white/90 flex-col justify-center items-center z-20'>
            <a href="#main" className='w-[75%] flex justify-center'>
              <AiOutlineHome size={20} />
              <span className="pl-4"> Home </span>
            </a>
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  );
};

export default Sidenav;
