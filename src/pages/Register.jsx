import Input from "../components/Input";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login, register } from "../components/firebase.js";
import { Formik, Form } from "formik";
import RegisterSchema from "../validation/registerSchema";
import Button from "../components/Button";
import Seperator from "../components/Seperator";
import { Helmet } from "react-helmet";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values, actions) => {
    const response = await register(values);

    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className="w-[350px] grid gap-y-3">
      <Helmet>
        <title>Register Instagram</title>
      </Helmet>
      <div className=" bg-white border px-[40px] pb-6 pt-10">
        <div className="flex justify-center mb-4">
          <img
            className=" h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt=""
          />
        </div>
        <p className="text-[17px] font-semibold text-[#8e8e8e] text-center mb-6">
          Sign up to see photos and videos from your friends
        </p>
        <Button>
          <AiFillFacebook size={20} />
          Log in with Facebook
        </Button>
        <Seperator label="YA DA" />
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            email: "",
            full_name: "",
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty, values }) => (
            <Form className="grid gap-y-1.5">
              <Input name="email" label="Email" />
              <Input name="full_name" label="Full Name" />
              <Input name="username" label="Username" />
              <Input type="password" name="password" label="Password" />
              <p className="text-xs text-center text-[#8e8e8e] mb-2">
                People who use our service may have uploaded your contact
                information to Instagram.
                <a href="#" className="font-semibold">
                  Learn More
                </a>
                <br />
                <br />
                By signing up, you agree to our{" "}
                <a href="#" className="font-semibold">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="font-semibold">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="font-semibold">
                  Cookies Policy .
                </a>{" "}
              </p>
              <Button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className=" bg-white border p-4 text-sm text-center">
        <p href="#" className="text-sm">
          Have an account?{" "}
          <Link to="/auth/login" className="text-brand ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
