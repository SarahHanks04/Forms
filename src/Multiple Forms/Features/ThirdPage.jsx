import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "./Slice/FormSlice";
import { NavLink, useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const { address, password } = useSelector((state) => state.form);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const Previous = (e) => {
    e.preventDefault();
    navigate("/second");
  };

  return (
    <div>
      <form className="p-4 border rounded-md">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 mb-4 w-full"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 mb-8 w-full"
        />
        <br />
        <NavLink
          to="/submit"
          className="mt-4 bg-[#ff000064] text-white text-xl p-2 w-full rounded hover:bg-[#0000ff45]"
        >
          Next
        </NavLink>
      </form>
      <button onClick={Previous} className="p-10 text-red-600 text-[10px]">
        Go Back To Second Page
      </button>
    </div>
  );
};

export default ThirdPage;
