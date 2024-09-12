import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./Slice/FormSlice";
import { NavLink, useNavigate } from "react-router-dom";

const SecondPage = () => {
  const { phoneNumber, email } = useSelector((state) => state.form);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const Previous = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form className="p-4 border rounded-md">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 mb-4 w-full"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full mb-8"
        />
        <br />
        <NavLink
          to="/third"
          className="mt-4 bg-[#ff000064] text-white text-xl p-2 w-full rounded hover:bg-[#0000ff45]"
        >
          Next
        </NavLink>
      </form>
      <button onClick={Previous} className="p-10 text-red-600 text-[10px]">
        Go Back To First Page
      </button>
    </div>
  );
};

export default SecondPage;
