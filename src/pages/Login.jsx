import { useRef, useState } from "react";
import { useEffect } from "react";
import Input from "../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom";
import { login } from "../components/firebase.js";
import { Formik, Form } from "formik";
import LoginSchema from "../validation/loginSchema";
import Button from "../components/Button";
import Seperator from "../components/Seperator";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
function Login() {
  const ref = useRef();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

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

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  ];

  if (user) {
    return <Navigate to={location.state?.return_url || "/"} replace={true} />;
  }

  const handleSubmit = async (values) => {
    await login(values.username, values.password);
  };

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8 ">
      <Helmet>
        <title>Login Instagram</title>
      </Helmet>
      <div
        className="hidden md:block w-[380px] h-[581px] relative  bg-logo-pattern bg-length:[468.32px_634.15px] bg-[top_left_-46px] mb-8"
        ref={ref}
      >
        <div className="w-[250px] h-[581px] absolute top-[27px] right-[18px]">
          {images.map((image, index) => {
            return (
              <img
                className="absolute top-0 left-0 opacity-0 transition-opacity duration-750 ease-linear"
                src={image}
                alt=""
                key={index}
              />
            );
          })}
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
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-1.5">
                <Input
                  name="username"
                  label="Phone number, username or email"
                />
                <Input type="password" name="password" label="Password" />

                <Button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                >
                  {" "}
                  Log In
                </Button>

                <Seperator />
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
              </Form>
            )}
          </Formik>
        </div>
        <div className=" bg-white border p-4 text-sm text-center">
          Dont have an account?{" "}
          <Link to="/auth/register" className="font-bold text-brand">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
