import { useState } from "react";
import user_image from "../Media/user-profile.png";
import email_image from "../Media/mail.png";
import pass_image from "../Media/padlock.png";
import google_img from "../Media/google_img.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const google = () =>{
  window.open("http://localhost:5000/auth/google");
}

const MainForm = () => {
  const [action, setAction] = useState("Sign Up");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async(e) =>{
    e.preventDefault();
    let userData ={
        email:email,
        password:password,
        username:username,
      }
    
   if (username && email && password){
    axios.post("http://localhost:5000/login",userData )
    .then(navigate('/Dashboard'))
   }
   else{
       alert("invalid input")
   }
    }
  return (
    <div className="container flex flex-col p-4 font-poppins">
      <div className="topic flex flex-col justify-center items-center mt-4">
        <div className="text text-[#3c009d] font-semibold text-4xl h-12">
          {action}
        </div>
        <div className="decoration w-16 h-1.5 bg-purple-800 rounded-md"></div>
      </div>
      <form onSubmit={handlesubmit}>
      <div className="entries mt-3 flex flex-col gap-2 items-center">
        {action === "Login" ? (
          <div></div>
        ) : (
          
          <div className="entry mt-3  flex items-center justify-center h-12 bg-gray-300 rounded-lg ">
            <img className="mx-2" src={user_image} alt="" />
            <input
              className="bg-transparent border-none outline-none "
              type="text"
              placeholder="Name"
              onChange={e=>setusername(e.target.value)}
            />
          </div>
        )}

        <div className="entry mt-3 flex items-center justify-center h-12 bg-gray-300 rounded-lg">
          <img className="mx-2" src={email_image} alt="" />
          <input
            className="bg-transparent border-none outline-none"
            type="email"
            placeholder="Email Id"
            onChange={e=> setemail(e.target.value)}
          />
        </div>
        <div className="entry mt-3 flex items-center justify-center h-12  bg-gray-300 rounded-lg">
          <img className="mx-2" src={pass_image} alt="" />
          <input
            className="bg-transparent border-none outline-none"
            type="password"
            placeholder="Password"
            onChange={e=> setpassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button value="Submit" >submit</button>
      </div>
      </form>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password px-16 text-[#797979] mt-4">
          Lost Password{" "}
          <span className="text-[#4c00b4] cursor-pointer ">Click Here!</span>
        </div>
      )}
      <div className="flex items-center justify-center  p-2">Or</div>

      <div className="flex items-center justify-center">
        <button className="flex border-black w-24 rounded-xl" onClick={google}>
          <span className="mx-2">Google</span>
          <img src={google_img} alt="" className="w-4 h-4 mt-1 rounded-full" />
        </button>
      </div>

      <div className="submit-container flex items-center justify-center p-2  mt-2  ">
        <div
          className={
            action === "Login"
              ? "submit gray  mx-2 rounded-2xl bg-gray-300 p-2 text-[#fff] w-20 flex items-center justify-center"
              : "submit mx-2 rounded-2xl bg-[#4c00b4] p-2 text-[#fff] w-20 flex items-center justify-center "
          }
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Signup
        </div>
        <div
          className={
            action === "Sign Up"
              ? "submit gray  mx-2 rounded-2xl bg-gray-300 p-2 text-[#fff] w-20 flex items-center justify-center "
              : "submit mx-2 rounded-full bg-[#4c00b4] p-2 text-[#fff] w-20 flex items-center justify-center "
          }
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default MainForm;
