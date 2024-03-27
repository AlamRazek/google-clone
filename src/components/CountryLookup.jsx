"use client";

import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API}`
      )
        .then((res) => res.json)
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  }, []);

  return (
    <div>
      <div>{country}</div>
    </div>
  );
};

export default CountryLookup;
