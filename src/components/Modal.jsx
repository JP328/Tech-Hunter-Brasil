import { Link } from "react-router-dom";
import ClassName from "classnames"
import { useDispatch } from 'react-redux';
import { changeMenuModal } from "../store";
import { GiCancel } from "react-icons/gi";

function Modal() {
  const dispatch = useDispatch();
  
  const exitModal = () => dispatch(changeMenuModal())

  const classes = ClassName("w-4/5 relative text-center hover:text-Mpink after:content-[''] after:h-px after:w-full after:bg-Mpink/50 after:block after:absolute after:-bottom-14");

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden flex flex-col justify-around items-center text-white text-3xl bg-gradient-to-tr from-Mviolet to-Mbege">
    <Link className={classes}> Home </Link>
    <Link className={classes}> Squads </Link>
    <Link className={classes}> Empresas </Link>
    <Link className="border border-white rounded-lg px-3 py-1 hover:border-Mpink hover:text-Mpink">
      Login
    </Link>
    <div className="absolute z-10 right-5 top-4 text-3xl" onClick={exitModal}>
      <GiCancel/>
    </div>
  </div>
  )
}

export default Modal;