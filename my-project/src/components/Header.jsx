import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import HeaderItem from "./HeaderItem";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

const menu = [
  {
    name: "HOME",
    icon: HiHome,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    name: "MOVIE",
    icon: HiPlayCircle,
  },
  {
    name: "SERIES",
    icon: HiTv,
  },
];

const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} alt="" className="w-[80px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} key={item.name}/>
          ))}
        </div>
        <div className="flex gap-8 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} key={item.name}/>
          )}
          <div className="md:hidden"  onClick={() => {
                setToggle(!toggle);
            }}>
            <HeaderItem name={""} Icon={HiDotsVertical}/>
            {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} key={item.name}/>
              )}
            </div> : null}
          </div>
        </div>
      </div>
      <img src={avatar} alt="" className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
