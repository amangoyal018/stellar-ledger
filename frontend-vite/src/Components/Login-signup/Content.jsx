import hero_img from "../Media/hero.png";

export const Content = () => {
  return (
    <div className="  flex-1  grid grid-cols-1 lg:grid-cols-2 ">
      <div className="  flex flex-col items-center justify-center font-poppins">
        <div className=" h-1/2  p-3 subpixel-antialiased">
          <h1 className="text-6xl font-semibold h-20 ">Hello!</h1>
          <h2 className="text-5xl font-medium h-28 lg:h-20 ">
            Welcome to{" "}
            <span className="text-violet-900 font-semibold">SplitKaro</span>
          </h2>
          <p className="w-3/4 font-normal text-xl h-24">
            Sharing expenses with friends is simpler than ever with SplitKaro
          </p>
          <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#690da2] before:to-[#28047c] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Get Started
          </button>
        </div>
      </div>
      <div className=" flex justify-end items-end mx-4 my-8 ">
        <img
          src={hero_img}
          alt="no iamge"
          className="w-auto max-h-120 my-4 mx-4"
        />
      </div>
    </div>
  );
};
