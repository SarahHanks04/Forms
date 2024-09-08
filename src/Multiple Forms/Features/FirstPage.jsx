import React from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "./Slice/FormSlice";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const Next = (e) => {
    e.preventDefault();
    navigate("/second");
  };

  return (
    <div className=" p-10">
      <form className="p-4 border rounded-md">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full"
        />
        <br />
        <button
          onClick={Next}
          className="mt-4 bg-[#ff000064] text-white text-xl p-2 w-full rounded hover:bg-[#0000ff45]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FirstPage;