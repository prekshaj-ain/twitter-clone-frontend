import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";

import Backdrop from "./UIElements/Backdrop";
import Logo from "./Logo";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Required"),
      Password: Yup.string().required("Required"),
    }),
  });
  const content = (
    <div className="fixed max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-16 rounded-3xl">
      <ClearOutlinedIcon
        fontSize="small"
        sx={{ color: "white" }}
        className="p-1 bg-black rounded-full absolute top-3 left-3 cursor-pointer hover:opacity-70"
        onClick={() => navigate(-1)}
      />
      <Logo logoStyle={"absolute top-1 right-0 left-0 m-auto"} />
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">Sign in to Bluebird</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              id="Name"
              name="Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Name}
              placeholder="Email or Username"
              className={`border border-gray-300 rounded-sm p-2 outline-none focus:border-blue-500 w-full ${
                formik.touched.Name &&
                formik.errors.Name &&
                "placeholder:text-red-400 focus:border-red-400 border-red-400"
              }`}
            />
            {formik.touched.Name && formik.errors.Name ? (
              <div className="text-[.7rem] text-red-500 font-semibold">
                {formik.errors.Name}
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