import React, { useState } from "react";
import "./Auth.scss";
import CustomInput from "../../component/CustomInput/CustomInput";
import CustomButton from "../../component/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Axios from "axios";
import Auth from "../Auth/Auth";

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is Required")
    .min(4, "Password is too short"),
});

export default function LoginPage(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [loader, setLoader] = useState(false);

  const submitData = (data) => {
    setLoader(true);
    Axios.post("/api/login", {
      username: data?.username,
      password: data?.password,
    })
      .then((res) => {
        if (res?.status === 200) {
          console.log(res, "RESPONSE");
          Auth.login(() => {
            props.history.push("/dashboard");
          });
          setLoader(false);
        } else {
          alert("Wrong user name or password");
        }
      })
      .catch((err) => console.log(err), setLoader(false));
  };
  return (
    <div className="login--page--wrapper">
      <div className="top--wrapper">
        <h1>QUEXL</h1>
        <a>You don't have an account? Register now</a>
      </div>
      <div className="content--wrapper">
        <h1 className="h1">Login</h1>

        <form className="login--box" onSubmit={handleSubmit(submitData)}>
          <CustomInput
            label="Your registered email"
            register={register}
            name="username"
            type="name"
            error={errors.username?.message}
          />
          <CustomInput
            label="Your Password "
            register={register}
            name="password"
            type="password"
            error={errors.password?.message}
          />
          {loader ? (
            "loading..."
          ) : (
            <CustomButton text="Login" disable={false} />
          )}

          <a className="forgot--password--wrapper">Forgot your password ?</a>
        </form>
      </div>
    </div>
  );
}
