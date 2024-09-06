import React from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "./Slice/FormSlice";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const Submit = (e) => {
    e.preventDefault();
    navigate("/submit");
  };

  const Previous = (e) => {
    e.preventDefault();
    navigate("/second");
  };

  return (
    <div>
      <div className="p-4 border rounded-md">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full"
        />
        <br />
        <button
          onClick={Submit}
          className="mt-4 bg-[#ff000064] text-white text-xl p-2 w-full rounded hover:bg-[#0000ff45]"
        >
          Submit
        </button>
      </div>
      <button onClick={Previous} className="p-10 text-red-600 text-[10px]">
        Go Back To Second Page
      </button>
    </div>
  );
};

export default ThirdPage;
