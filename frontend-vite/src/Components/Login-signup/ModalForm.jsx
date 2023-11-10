import MainForm from "./MainForm";

// eslint-disable-next-line react/prop-types
const MyModal = ({ closeModal }) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed left-0 bottom-0 right-0 top-0 bg-[rgba(189,189,189,0.9)] z-40  "
      ></div>
      <div className="fixed w-2/3 lg:w-1/4 h-3/5 lg:h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40  bg-white flex flex-col rounded-lg">
        <button
          onClick={closeModal}
          className=" w-6 cursor-pointer group block px-1 py-1 rounded-md bg-black text-white text-1xl font-bold shadow-2xl hover:scale-110 transition active:scale-90 z-100 "
        >
          <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white">
            X
          </span>
        </button>
        <MainForm />
      </div>
    </>
  );
};
export default MyModal;
