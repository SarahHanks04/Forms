import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./Slice/FormSlice";
import { NavLink } from "react-router-dom";

const FirstPage = () => {
  const { firstName, lastName } = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  return (
    <div className=" p-10">
      <form className="p-4 border rounded-md">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 mb-4 w-full"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full mb-6"
        />
        <br />
        <NavLink
          to="/second"
          className="mt-4 bg-[#ff000064] text-white text-xl p-2 w-full rounded hover:bg-[#0000ff45]"
        >
          Next
        </NavLink>
      </form>
    </div>
  );
};

export default FirstPage;
