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
      <h1 className="text-2xl font-bold mb-6 text-center">
        Personal Information
      </h1>
      <div className="p-4 border rounded-md">
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
          className="mt-4 bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FirstPage;