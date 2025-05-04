import { MdOutlineMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setIsSidebarCollapsed } from "../store/reducers/app.slice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => dispatch(setIsSidebarCollapsed());

  return (
    <header className="w-full h-[10vh] flex items-center justify-between px-5 border-b-2 border-noteoo-200 text-zinc-800">
      <div className="flex items-center gap-5 sm:gap-8">
        <span
          onClick={toggleSidebarHandler}
          className="text-3xl cursor-pointer"
        >
          <MdOutlineMenu />
        </span>

        <h1 className="text-4xl font-[Caveat-Brush]">
          <Link to={"/"}>Dairy</Link>
        </h1>
      </div>

      <div>
        <div className="text-2xl bg-zinc-800 text-noteoo-100 p-2 rounded-full cursor-pointer">
          <FaRegUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
