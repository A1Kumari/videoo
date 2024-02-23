import Image from "next/image";
import Navbar1 from "./components/navbar/navbar1";
import MainSection from "./components/mainSection/mainSection";
import Navbar2 from "./components/navbar/navbar2";
import AboutSection from "./components/aboutSection/About"
import ToolsSection from "./components/toolsSection/Tools"
import HowToUseSection from "./components/HowToUse/Use"
import FAQSection from "./components/FaqSection/Faq"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <>
    <Navbar1/>
    <MainSection/>
    <Navbar2/>
    <AboutSection/>
    <ToolsSection/>
    <HowToUseSection/>
    <FAQSection/>
    <Footer/>
    </>
  );
}
