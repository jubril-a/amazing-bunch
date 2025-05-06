import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery"
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Gallery />
      <Schedule />
      <Footer />
    </>
  );
}
