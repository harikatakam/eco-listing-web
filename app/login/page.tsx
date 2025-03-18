"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center login-bg" >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative w-full max-w-md bg-white p-8 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-opacity-90 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center my-4 text-gray-600">OR</div>

        <button className="w-full flex items-center justify-center gap-2 bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
          {isLogin ? "Sign in" : "Sign up"} with Google
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition mt-3">
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
          {isLogin ? "Sign in" : "Sign up"} with Facebook
        </button>

        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
