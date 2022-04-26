import React from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import ExclusiveContent from "./components/ExclusiveContent/ExclusiveContent.js";
import Footer from "./components/Footer/Footer.js";
import HotspotBanner from "./components/HotspotBanner/HotspotBanner.js";
import Promotion from "./components/Promotion/Promotion.js";
import StickyMenu from "./components/StickyMenu/StickyMenu.js";

import { FullPage, Slide } from "react-full-page";
export default function HomePage() {
  return (
    <>
      <FullPage controls="true">
        <StickyMenu />
        <Slide>
          <HotspotBanner />
        </Slide>
        <Slide>
          <ContactForm />
        </Slide>
        <Slide>
          <Promotion />
        </Slide>
        <Slide>
          <ExclusiveContent />
        </Slide>
        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </>
  );
}
