import React, { useState, useRef } from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Heading = () => {
  const options = [
    { value: "option1", label: "Tất cả" },
    { value: "option2", label: "Nike" },
    { value: "option3", label: "Vans" },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const selectRef = useRef(null);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    console.log("Selected option:", selectedOption);
  };

  const handleArrowClick = () => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.click(); // Trigger a click event to open the dropdown
    }
  };

  return (
    <div className="flex justify-between items-center lg:bg-white py-1 bg-black w-full wrap  px-2 lg:px-0">
      <div>
        <h1 className="font-bold lg:text-4xl text-2xl text-white lg:text-black">
          <Link className="" to={"/"}>
            SHOP
          </Link>
        </h1>
      </div>

      <div className="lg:hidden flex group relative">
        <IoMenu className="text-white w-[30px] h-[30px] z-10 cursor-pointer" />
        <div>
          <div className="bg-white">
            <div className="opacity-0 hidden group-hover:block group-hover:opacity-100 transition-opacity duration-1000 absolute w-[150px] p-4 top-[90%] z-100 right-0 shadow-2xl bg-white rounded-sm">
              <div className="flex gap-2 items-center cursor-pointer">
                <IoIosPersonAdd />
                <Link to="register">Đăng ký</Link>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <FaAddressBook />
                <Link to="login">Đăng nhập</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden">
        <div className="flex border rounded px-2 items-center">
          <select
            ref={selectRef}
            name="cars"
            onChange={handleChange}
            value={selectedValue}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="border-gray-200 flex border items-center px-4 w-[400px] justify-between cursor-pointer">
          <input
            type="text"
            className="outline-none"
            placeholder="Tìm kiếm..."
          />
          <RiFindReplaceLine className="ml-2" />
        </div>
      </div>

      <div className="lg:flex gap-4 hidden">
        <div className="flex gap-2 items-center group relative">
          <div>
            <FaUser />
          </div>
          <div className="">
            Tài khoản
            <div className="opacity-0 hidden group-hover:block group-hover:opacity-100 transition-opacity duration-1000 absolute w-[150px] p-4 top-[90%] z-100 right-0 shadow-2xl bg-white rounded-sm">
              <div className="flex gap-2 items-center cursor-pointer">
                <IoIosPersonAdd />
                <Link to="register">Đăng ký</Link>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <FaAddressBook />
                <Link to="login">Đăng nhập</Link>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="cart"
          className="flex items-center gap-4 cursor-pointer group relative"
        >
          <div className="bg-black text-white justify-center items-center flex px-2 py-2 h-[30px]">
            <FaShoppingCart />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold">Giỏ hàng</div>
            <div>(1) Sản phẩm</div>
            <div className="opacity-0 hidden group-hover:block group-hover:opacity-100 transition-opacity duration-300 absolute w-[300px] p-4 top-full right-0 shadow-2xl bg-white rounded-sm">
              <p className="text-[12px]">
                Không có sản phẩm nào trong giỏ hàng
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
