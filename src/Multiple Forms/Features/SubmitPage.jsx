import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SubmitPage = () => {
  const { firstName, lastName, phoneNumber, email, address, password } =
    useSelector((state) => state.form);

    const navigate = useNavigate();
    const Back = (e) => {
    e.preventDefault();
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
      <button onClick={Back} className="p-10 text-red-600 text-[10px]">Go Back</button>
    </form>
  );
};

export default SubmitPage;
