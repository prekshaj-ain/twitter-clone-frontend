import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Backdrop from "./UIElements/Backdrop";

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Username: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      Email: Yup.string().email("Invalid email address").required("Required"),
      Username: Yup.string()
        .max(50, "Must be 50 characters or less")
        .min(3, "Must ne 3 characters or more")
        .required("Required")
        .matches(
          "^[a-zA-Z0-9_]*$",
          "Must contain characters, number and underscore only"
        ),
      Password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(18, "Must be 18 characters or less")
        .required("Required"),
    }),
  });
  const content = (
    <div className="fixed max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-10 rounded-3xl">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-semibold">Create Your Account</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              id="Name"
              name="Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Name}
              placeholder="Name"
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
              id="Email"
              name="Email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Email}
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
              id="Username"
              name="Username"
              type="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Username}
              placeholder="Username"
              className={`border border-gray-300 rounded-sm p-2 outline-none focus:border-blue-500 w-full ${
                formik.touched.Username &&
                formik.errors.Username &&
                "placeholder:text-red-400 focus:border-red-400 border-red-400"
              }`}
            />
            {formik.touched.Username && formik.errors.Username ? (
              <div className="text-[.7rem] text-red-500 font-semibold">
                {formik.errors.Username}
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
            Signup
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

export default Signup;
