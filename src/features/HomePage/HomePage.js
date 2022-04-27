import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import ExclusiveContent from "./components/ExclusiveContent/ExclusiveContent.js";
import Footer from "./components/Footer/Footer.js";
import HotspotBanner from "./components/HotspotBanner/HotspotBanner.js";
import Promotion from "./components/Promotion/Promotion.js";
import StickyMenu from "./components/StickyMenu/StickyMenu.js";

import { FullPage, Slide } from "react-full-page";
export default function HomePage() {
  const { width } = useWindowDimensions();
  return (
    <>
      <FullPage
        controls="true"
        duration={100}
        scrollMode={width >= 1920 ? "full-page" : "normal"}
      >
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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
