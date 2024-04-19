import Nav from "@/components/Nav";
import Intro from "@/components/intro";
import Sliding from "@/components/sliding";
import ConnectingWorlds from "@/components/connectingWorlds";
import Smarter from "@/components/smarter";
import Impact from "@/components/impact";
import Technology from "@/components/technology";
import Demo from "@/components/demo";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials/page";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Sliding />
      <ConnectingWorlds />
      <Smarter />
      <Impact />
      <Testimonials />
      <Technology />
      <Demo />
      <Footer />
    </>
  );
}
