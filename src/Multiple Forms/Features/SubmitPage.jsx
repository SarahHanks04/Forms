import React from "react";
import { useSelector } from "react-redux";

const SummaryPage = () => {
  const { firstName, lastName, phoneNumber, email, address, password } = useSelector(
    (state) => state.form
  );

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-2xl font-bold">Summary</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default SummaryPage;
