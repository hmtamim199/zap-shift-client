import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2 className="text-3xl font-bold">Create an account!</h2>
        </div>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password")}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
        </fieldset>
        <button className="btn btn-neutral mt-4">Sing Up</button>
      </form>
    </div>
  );
};

export default Register;
