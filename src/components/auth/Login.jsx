import React from "react";
import Navigation from "../main/Navigation";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrap">
      <Navigation title="Đăng nhập tài khoản"/>
      <div className="py-4">
        <h2 className="font-bold text-2xl">Đăng nhập tài khoản</h2>
        <p className="text-[14px]">Nếu bạn đã có tài khoản, đăng nhập tại đây.</p>

        <div className="md:flex block md:gap-4 md:justify-centeR">

          <div className="w-full">
            <div className="flex flex-col gap-2">
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Email"
                className="outline-none border border-gray-200 px-2 py-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Email"
                className="outline-none border border-gray-200 px-2 py-2"
              />
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button className="bg-black px-4 py-2 text-whitehover:opacity-10 text-white">
                Đăng nhập
              </button>
              <Link to="/register">Đăng ký</Link>
            </div>
          </div>

          <div className="w-full md:mt-[-20px]">
            <p className="text-[14px]">
              Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
              email.
            </p>

            <div className="flex flex-col gap-2">
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Email"
                className="outline-none border border-gray-200 px-2 py-2"
              />
            </div>

            <button className="bg-black px-4 py-2 text-white mt-8">
              Lấy lại mật khẩu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
