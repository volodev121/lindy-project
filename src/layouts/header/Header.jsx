import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl z-50">
      <div className="nav-wrapper    flex-col ">
        <div className="flex justify-center items-center bg-[#d4ffec] py-[5px] px-2.5">
          <NavLink to="/" className="flex">
            <div className="flex text-sm font-medium text-[#113140] pr-2">
              Meet Lindy: Your AI Personal Assistant
            </div>
            <img
              src="https://assets.website-files.com/63e15df811f9df22b231e58f/64192fa0407545474eff5841_ArrowLeft%20(1).svg"
              width={"20px"}
              alt="meet"
            />
          </NavLink>
        </div>
      </div>

      <div className="  w-full">
        <div className="h-[72px] backdrop-opacity-20 px-[10px] flex justify-evenly items-center">
          <div className="h-[45px] ">
            <img
              src="/assets/imgs/svg/logo.svg"
              alt="logo"
              className="h-[45px] "
            />
          </div>
          <div className="flex items-center">
            <Link to="features" smooth={true} duration={500}>
              <p className="font-medium hover:text-[#69bae0] pr-8">Features</p>
            </Link>
            <Link to="#integrations" smooth={true} duration={500}>
              <p className="font-medium hover:text-[#69bae0] pr-8">
                Integrations
              </p>
            </Link>
            <Link to="#home" smooth={true} duration={500}>
              <p className="font-medium hover:text-[#69bae0] pr-8">
                Principles
              </p>
            </Link>
            <Link to="#home" smooth={true} duration={500}>
              <p className="font-medium hover:text-[#69bae0] pr-8">Blog</p>
            </Link>
            <Link to="#home" smooth={true} duration={500}>
              <p className="font-medium hover:text-[#69bae0] pr-8">Careers</p>
            </Link>
            <a
              href="#home"
              className="bg-[#fff]  hover:shadow-inner ease-out duration-300 rounded-full"
            >
              <button>
                <p className="font-semibold    py-2 px-4 text-[#11181c]">
                  Join Beta
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
