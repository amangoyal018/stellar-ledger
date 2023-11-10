import { useState } from "react";
import logo from "../Media/logo.png";
import name from "../Media/name.png";
import MyModal from "./ModalForm";

export const TopBar = () => {
  const [showModalForm, setShowModalForm] = useState(false);

  const closeModal = () => {
    return setShowModalForm(false);
  };

  return (
    <>
      <div className="h-24  flex text-black  font-poppins tracking-wide ">
        <div className=" flex justify-center items-center tracking-wider  ">
          <img
            src={logo}
            alt="logo.png"
            className="h-16 w-40 lg:w-40 lg:h-18 rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center bg-gray-300s -mx-4">
          <img src={name} alt="" className="h-28 w-80 lg:w-64" />
        </div>
        <div className=" end-1 w-full flex justify-end items-center px-9">
          <button
            onClick={() => setShowModalForm(true)}
            className="w-[100px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#690da2] before:to-[#28047c] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            Login
          </button>
        </div>
      </div>
      {showModalForm && <MyModal closeModal={closeModal} />}
    </>
  );
};
