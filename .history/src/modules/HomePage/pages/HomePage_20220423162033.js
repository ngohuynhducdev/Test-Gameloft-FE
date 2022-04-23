import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import StoreButton from "../components/StoreButton";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <StoreButton />
      <ContactForm />
    </>
  );
}
