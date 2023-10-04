import {Link} from "react-router-dom"

const Navbar = () => {
    return (
      <header className="header w-full h-[60px] -stone-900	background-color: rgb(28 25 23);
      bg-stone-950  "                      >
        <nav className="navbar flex  justify-center ">
            <ul className="ul flex gap-[40PX] justify-normal  ">
                <li className="li  ">
                    <Link to ={"/"}>New</Link>
                </li>
                <li className="li text-pink-600 ">
                    <Link to ={"men"}>Men</Link>
                </li>
                <li className="li text-pink-600 ">
                    <Link to ={"women"}>Women</Link>
                </li>
                <li className="li text-pink-600">
                    <Link to ={"kids"}>Kids</Link>
                </li> 
                <li className="li text-pink-600">
                    <Link to ={"sale"}>Sale</Link>
                </li>
                <li className="li text-pink-600">
                    <Link to ={"Singn"}>Singn</Link>
                </li>
            </ul>
        </nav>
      </header>
    )
  };
  
  export default Navbar