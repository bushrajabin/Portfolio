import { createInstance } from "localforage";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Errorpage() {
  const navigate=useNavigate();
  const backHome = () => {
  navigate('/')
  };
  return (
    <div>
      <div className=" bg-white flex flex-col items-center  xl:bg-gray-50 xl:flex xl:flex-col xl:items-center xl:p-20 xl:cursor-pointer">
        <img src="./images/error.gif" alt="" className=" p-4 xl:w-5/12" />
        <button className= " flex flex-row bg-white m-4  xl:bg-white xl:font-bold xl:p-2 xl:m-2 xl:flex xl:flex-row" onClick={ backHome}>BackToHome <IoArrowBackOutline className=" mt-1 xl:mt-1" /></button>

      </div>
    </div>
  );
}

export default Errorpage;
