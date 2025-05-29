import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery"
import Schedule from "./components/Schedule";

export default function Home() {
  return (
    <>
      <Navbar page="home" />
      <Header />
      <Services />
      <Gallery />
      <Schedule />
    </>
  );
}
