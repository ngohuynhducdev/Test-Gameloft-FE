import React from "react";
import Community from "./components/Community/Community.js";
import ContactForm from "./components/ContactForm/ContactForm.js";
import ExclusiveContent from "./components/ExclusiveContent/ExclusiveContent.js";
import Footer from "./components/Footer/Footer.js";
import HotspotBanner from "./components/HotspotBanner/HotspotBanner.js";
import Promotion from "./components/Promotion/Promotion.js";
import StickyMenu from "./components/StickyMenu/StickyMenu.js";

export default function HomePage() {
  return (
    <>
      <StickyMenu />
      <HotspotBanner />
      <ContactForm />
      {/* <Community /> */}
      <Promotion />
      <ExclusiveContent />
      <Footer />
    </>
  );
}
