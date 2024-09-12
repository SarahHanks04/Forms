import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetForm } from "./Slice/FormSlice";

const SubmitPage = () => {
  const { firstName, lastName, phoneNumber, email, address, password } =
    useSelector((state) => state.form);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Back = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const Reset = (e) => {
    e.preventDefault();
    dispatch(resetForm());
    navigate("/");
  };

  return (
    <form>
      <h1 className="text-3xl font-bold mb-8">Details Submitted</h1>
      <div className="text-start p-4 border-2 rounded-md">
        <p className="mb-2">
          <b>First Name:</b> {firstName}
        </p>

        <p className="mb-2">
          <b>Last Name:</b> {lastName}
        </p>

        <p className="mb-2">
          <b>Phone Number:</b> {phoneNumber}
        </p>

        <p className="mb-2">
          <b>Email:</b> {email}
        </p>

        <p className="mb-2">
          <b>Address:</b> {address}
        </p>

        <p className="mb-2">
          <b>Password:</b> {password}
        </p>
      </div>
      <button onClick={Back} className="p-10 text-red-600 text-[10px]">
        Go Back
      </button>
      <button
        type="submit"
        onClick={Reset}
        className="p-10 text-red-600 text-[10px]"
      >
        Reset
      </button>
    </form>
  );
};

export default SubmitPage;
