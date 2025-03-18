"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AdSense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <>
      {/* Google AdSense Script */}
      <Script
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
      
      {/* Ad Unit */}
      <div className="flex justify-center my-4">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // Replace with your AdSense publisher ID
          data-ad-slot="XXXXXXXXXX"                 // Replace with your Ad slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
}
