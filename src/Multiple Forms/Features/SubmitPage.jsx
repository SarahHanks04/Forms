import React from "react";
import { useSelector } from "react-redux";

const SubmitPage = () => {
  const { firstName, lastName, phoneNumber, email, address, password } =
    useSelector((state) => state.form);

  return (
    <div>
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
    </div>
  );
};

export default SubmitPage;
