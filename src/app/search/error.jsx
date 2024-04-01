"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log("error");
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10 ">
      <h1 className="text-3xl mb-4 ">Something went wrong</h1>
      <button className="text-blue-500">Try Again</button>
    </div>
  );
};

export default Error;
