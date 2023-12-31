import React from "react";
import Navigation from "../main/Navigation";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="wrap">
      <Navigation title="Đăng ký tài khoản" />
      <div className="py-4">
        <h2 className="font-bold text-2xl">Đăng ký tài khoản</h2>
        <p className="text-[14px]">
          Nếu chưa có tài khoản vui lòng đăng ký tại đây
        </p>

        <div className="md:grid block md:gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3>Họ</h3>
            <input
              type="text"
              placeholder="Họ"
              className="outline-none border border-gray-200 px-2 py-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3>Tên</h3>
            <input
              type="text"
              placeholder="Tên"
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
          <div className="flex flex-col gap-2">
            <h3>Mật khẩu</h3>
            <input
              type="text"
              placeholder="Mật khẩu"
              className="outline-none border border-gray-200 px-2 py-2"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-black px-4 py-2 text-whitehover:opacity-10 text-white">
            Đăng ký
          </button>
          <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
