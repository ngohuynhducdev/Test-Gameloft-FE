import React from "react";
import HotspotBanner from "./components/HotspotBanner/HotspotBanner.js";

import StickyMenu from "./components/StickyMenu/StickyMenu.js";

export default function HomePage() {
  return (
    <>
      <StickyMenu />
      <HotspotBanner />
    </>
  );
}
