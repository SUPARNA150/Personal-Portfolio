import { useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-start items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' 
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
          }}
          >
        </Link>
        <ul className='list-none hidden sm:flex float-left flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
                </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-start items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-21 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>  
      </div>

      <div className='w-full flex justify-end max-w-7xl mx-auto'>
          <button 
          onClick={() => {
            window.open("https://drive.google.com/file/d/1zdiXEZZSGh8cBZqnFa_QyTm2Lso0oVx4/view?usp=sharing", "_blank");
          }}  
          className=" text-sm bg-[#1d1836] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary min-[280px]:max-[440px]:px-5 min-[280px]:max-[440px]:py-2">
            Download CV
          </button>  
      </div>
    </nav>
  );
};

export default Navbar;