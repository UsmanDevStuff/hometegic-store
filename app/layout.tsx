import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CrispProvider } from "@/components/crisp-provider";

import { Analytics } from "@vercel/analytics/react";

import Script from "next/script";

import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "ShopTegic",
  description: "ShopTegic - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
     <Script 
      id="gtm_code"
      dangerouslySetInnerHTML={
        {
          __html:`
          <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PKPNF4Z4');</script>
<!-- End Google Tag Manager -->
          `
        }
      }
     />
      </head>
      <Script
        id="meta_pixel_code"
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Meta Pixel Code -->
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1790395454746495');
fbq('track', 'PageView');
<!-- End Meta Pixel Code -->
          `,
        }}
      />
      <noscript><img height="1" width="1" className="hidden"
      src="https://www.facebook.com/tr?id=1790395454746495&ev=PageView&noscript=1"
      /></noscript>
      <CrispProvider />
      <body className={font.className}>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKPNF4Z4"
height="0" width="0" className="hidden"></iframe></noscript>
        <NextTopLoader />
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
