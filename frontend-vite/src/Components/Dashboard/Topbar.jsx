import logo from "../Media/logo.png";
import name from "../Media/name.png";

const Topbar = () => {
  return (
    <>
      <div className="h-20  flex text-black  font-poppins ">
        <div className=" flex justify-center items-center   ">
          <img
            src={logo}
            alt="logo.png"
            className="h-16 w-40 lg:w-40 lg:h-18 rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center bg-gray-300s -mx-4">
          <img src={name} alt="" className="h-28 w-80 lg:w-56" />
        </div>
      </div>
    </>
  );
};
export default Topbar;
