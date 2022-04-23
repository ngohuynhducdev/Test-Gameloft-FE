import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import StoreButton from "../components/StoreButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <StoreButton />
      {/* <Register /> */}
    </>
  );
}
