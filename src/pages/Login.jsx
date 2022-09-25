import { useRef, useState } from "react";
import { useEffect } from "react";
import Input from "../components/Input";
import { AiFillFacebook } from "react-icons/ai";

function Login() {
  const [username, setUsarname] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef();

  const enable = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    const total = images.length;
    let current = 0;

    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");
      images[current].classList.remove("opacity-0");
      current = current === total - 1 ? 0 : current + 1;
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8 ">
      <div
        className="hidden md:block w-[380px] h-[581px] relative  bg-logo-pattern bg-length:[468.32px_634.15px] bg-[top_left_-46px] mb-8"
        ref={ref}
      >
        <div className="w-[250px] h-[581px] absolute top-[27px] right-[18px]">
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-750 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
            alt=""
          />
          <img
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border px-[40px] pb-6 pt-10">
          <a href="#" className="flex justify-center">
            <img
              className="w-[175px] h-[51px]  mb-8"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt=""
            />
          </a>

          <form className="grid gap-y-1.5">
            <Input
              type="text"
              value={username}
              label="Phone number, username or email"
              onChange={(e) => setUsarname(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              disabled={!enable}
              type="submit"
              className="h-[30px] bg-brand text-white text-sm rounded-xs my-2 font-medium disabled:opacity-50 mt-1"
            >
              Log In
            </button>
            <div className="flex items-center my-2">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-gray-500 text-[13px] font-semibold my-2.5 mb-3.5">
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
            <a
              href="#"
              className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook mb-2"
            >
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a
              href="#"
              className="text-xs flex items-center justify-center text-link"
            >
              Forgot password?
            </a>
          </form>
        </div>
        <div className=" bg-white border p-4 text-sm text-center">
          Dont have an account?{" "}
          <a href="#" className="font-bold text-brand">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
