import React from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "./Slice/FormSlice";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const Next = (e) => {
    e.preventDefault();
    navigate("/third");
  };

  const Previous = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <div className="p-4 border rounded-md">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          onInput={handleInput}
          required
          className="border rounded px-2 py-1 w-full"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
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
      </div>
      <button onClick={Previous} className="p-10 text-red-600 text-[10px]">
        Go Back To First Page
      </button>
    </div>
  );
};

export default SecondPage;
