import React from "react";
import Footer from "./Footer";
import SiteInfo from "../components/SiteInfo";
import HappyCLient from "./HappyClient";
import Global from "../components/Global";
import ShareOnSocialMedia from "../components/ShareOnSocialMedia";
export default function SiteContant() {
  return (
    <div>
      <SiteInfo></SiteInfo>
      <Global></Global>
      <HappyCLient></HappyCLient>
      <ShareOnSocialMedia></ShareOnSocialMedia>
      <Footer></Footer>
    </div>
  );
}
