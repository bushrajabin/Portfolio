import React from "react";
import { FaHome } from "react-icons/fa";
import { LinksPdf } from "../../common/LinksPdf";

function Links() {
  return (
    <div className="p-4 space-x-3 text-center justify-center items-center font-bold pt-2 text-purple-900 shadow-xl fixed top-14 w-full bg-white flex flex-row  cursor-pointer  xl:p-2  xl:text-1xl xl:text-purple-800 xl:shadow-xl xl:space-x-10 xl:font-bold  xl:fixed xl:w-full  xl:z-0 xl:flex xl:flex-row">
      <FaHome className="xl:text-xl xl:flex xl:flex-row" />
      {LinksPdf.map((data, index, arr) => {
        const { title, link } = data;
        return (
          <div>
            <a href={link} target="_blank">
              {title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Links;
