// src/components/auth/ForgotPasswordComponent.tsx

import React, { useState } from "react";
import { resetPassword } from "../../firebase/auth";
import { message } from "antd";

const ForgotPasswordComponent: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await resetPassword(email);
      message.success("Password reset email sent!");
    } catch (error) {
      message.error("Inavlid username or password");
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen overflow-hidden">
      <div className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">
          Forgot Password
        </h1>
        <form>
          <label className="text-gray-500 block mt-3">
            Email Address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
            />
          </label>
          <button
            type="button"
            onClick={handleResetPassword}
            className="mt-6  block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;