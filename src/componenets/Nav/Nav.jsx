import React from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      title: "About",
      route: "/about",
    },
    {
      id: 2,
      title: "Notes",
      route: "/notes",
    },
    {
      id: 3,
      title: "Contact",
      route: "/contact",
    },
  ];

  const onLinkNavigate = (route) => {
    navigate(route);
  };
  return (
    <div className="  flex flex-row  justify-between p-5 cursor-pointer fixed w-full bg-white  xl:flex xl:flex-row xl:justify-between xl:p-5 xl:text-center xl:items-center xl:cursor-pointer xl:fixed  xl:w-full xl:z-0 xl:bg-white  ">
      <div className=" text-xl font-serif xl:text-2xl xl:font-serif xl:text-center ">
        <h3>Bushra jabin</h3>
      </div>
      <div className=" flex flex-row  space-x-3 font-bold items-center  xl:flex xl:flex-row xl:space-x-7 xl:font-bold xl:p-2">
        {links.map((data, index, arr) => {
          const { id, title, route } = data;
          return (
            <div
              className="xl:flex xl:flex-row"
              onClick={()=>onLinkNavigate(route)}
            >
              <a href="">{title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
