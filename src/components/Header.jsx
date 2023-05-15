import { useDispatch } from "react-redux";
import { changeMenuModal } from "../store";
import {GiHamburgerMenu} from "react-icons/gi";
// import className from "classnames";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const toggleModalMenu = () => dispatch(changeMenuModal());

  return (
    <header className="w-full h-[10%] min-h-fit absolute inset-0 text-white overflow-hidden">

      <nav className="w-full h-full flex justify-between items-center text-xl font-semibold mx-3">
        <img src="/logo.png" alt="Logo Tech Hunter Brasil" className="lg:w-1/6 lg:h-2/5 max-md:h-2n/5 max-md:w-2/5 w-1/5 h-1/3"/>
        <div className="md:w-3/5 w-px max-md:invisible flex justify-around items-center">
          <Link className="hover:text-Mpink">Home</Link>
          <Link className="hover:text-Mpink">Squads</Link>
          <Link className="hover:text-Mpink">Empresas</Link>
          <Link className="border border-white rounded-lg px-3 py-1 hover:border-Mpink hover:text-Mpink">
            Login
          </Link>
        </div>
        <div className="absolute md:w-px md:invisible text-3xl right-5" onClick={toggleModalMenu}>
          <GiHamburgerMenu/>
        </div>
      </nav>
      {/* <div className="w-full after:content-[''] after:h-px after:w-full after:bg-white/30 after:block"/> */}
    </header>
  )
}
export default Header;