import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";



export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portfolio | Home</title>
        <meta name="description" content="Portfolio de [Tu Nombre]" />
      </Head>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
