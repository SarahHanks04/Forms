import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetForm } from "./Slice/FormSlice";

const SubmitPage = () => {
  const { firstName, lastName, phoneNumber, email, address, password } =
    useSelector((state) => state.form);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetForm());
    navigate("/");
    alert("Thank You For Confirming Your Submission!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Details Submitted</h1>
      <form className="text-start p-4 border-2 rounded-md">
        <div className="flex items-center mb-4">
          <label className="w-1/3 font-bold">First Name</label>
          <input
            type="text"
            value={firstName}
            className="border px-2 py-1 w-2/3"
            readOnly
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 font-bold">Last Name</label>
          <input
            type="text"
            value={lastName}
            className="border px-2 py-1 w-2/3"
            readOnly
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 mr-2 font-bold">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            className="border px-2 py-1 w-2/3"
            readOnly
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 font-bold">Email</label>
          <input
            type="text"
            value={email}
            className="border px-2 py-1 w-2/3"
            readOnly
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 font-bold">Address</label>
          <input
            type="text"
            value={address}
            className="border px-2 py-1 w-2/3"
            readOnly
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/3 font-bold">Password</label>
          <input
            type="password"
            value={password}
            className="border px-2 py-1 w-2/3"
            readOnly
          />
        </div>
      </form>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white px-8 py-1 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitPage;
