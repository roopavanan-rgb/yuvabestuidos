import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/react-card-slider.css";
import ScrollToTop from "@/components/ScrollToTop";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/yb-icon.png" />
      </Head>

      {/* ✅ Google Tag Manager Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NS8L3LZL');
        `}
      </Script>

      {/* ✅ Apollo Tracking Script */}
      <Script id="apollo-tracker" strategy="afterInteractive">
        {`
          function initApollo() {
            var n = Math.random().toString(36).substring(7),
                o = document.createElement("script");
            o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
            o.async = true;
            o.defer = true;
            o.onload = function() {
              window.trackingFunctions.onLoad({ appId: "679644dd88314801b045b602" });
            };
            document.head.appendChild(o);
          }
          initApollo();
        `}
      </Script>

      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B6TV8VEY5R"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-B6TV8VEY5R');
`}
      </Script>

      <main className="font-primary w-full min-h-screen">
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
          <ScrollToTop />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
