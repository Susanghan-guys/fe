"use client";

import Script from "next/script";

export default function AnalyticsTools() {
  const shouldLoadGA = process.env.NODE_ENV === "production" || 
                      process.env.NEXT_PUBLIC_ENABLE_GA === "true";
  
  if (!shouldLoadGA) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MSJZZZEEW7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MSJZZZEEW7', {
            debug_mode: true
          });
        `}
      </Script>
      
      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sm188yhpi7");
        `}
      </Script>
    </>
  );
}
