import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";

import Backdrop from "./UIElements/Backdrop";
import Logo from "./UIElements/Logo";
import { loginUser } from "./Utils/Apicalls/userApi";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.Auth.isLoggedIn);
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Email: Yup.string().email("Invalid email address").required("Required"),
      Password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      loginUser(values, dispatch, navigate);
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  const content = (
    <div className="fixed w-full max-w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-10 sm:p-16 rounded-3xl">
      <ClearOutlinedIcon
        fontSize="small"
        sx={{ color: "white" }}
        className="p-1 bg-black rounded-full absolute top-3 left-3 cursor-pointer hover:opacity-70"
        onClick={() => navigate(-1)}
      />
      <Logo logoStyle={"absolute top-1 right-0 left-0 m-auto"} />
      <div className="flex flex-col gap-5">
        <h2 className=" text-xl sm:text-2xl font-semibold">
          Log in to Bluebird
        </h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              id="Email"
              name="Email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Name}
              placeholder="Email"
              className={`border border-gray-300 rounded-sm p-2 outline-none focus:border-blue-500 w-full ${
                formik.touched.Email &&
                formik.errors.Email &&
                "placeholder:text-red-400 focus:border-red-400 border-red-400"
              }`}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="text-[.7rem] text-red-500 font-semibold">
                {formik.errors.Email}
              </div>
            ) : null}
          </div>
          <div>
            <input
              id="Password"
              name="Password"
              type="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Password}
              placeholder="Password"
              className={`border border-gray-300 rounded-sm p-2 outline-none focus:border-blue-500 w-full ${
                formik.touched.Password &&
                formik.errors.Password &&
                "placeholder:text-red-400 focus:border-red-400 border-red-400"
              }`}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="text-[.7rem] text-red-500 font-semibold">
                {formik.errors.Password}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-3xl bg-black font-bold opacity-100 text-white hover:opacity-80 disabled:opacity-50"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
  return (
    <>
      <Backdrop />
      {ReactDOM.createPortal(content, document.getElementById("modal-hook"))}
    </>
  );
};

export default Login;
