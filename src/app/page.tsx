import Image from "next/image";
import Navbar from './components/Navbar';
import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import EducationSkill from "./components/EducationSkill";
import Skill from "./components/Skill";
import Services from './components/Services';

export default function home(){
  return(
    <div>
      

        <Navbar/>
      
        <Hero/>
        <Portfolio/>
        <Services/>
        <EducationSkill/>
        
        <Footer/>
      
    </div>
  )
}