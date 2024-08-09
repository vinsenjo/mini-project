
import Acara from "@/components/beranda/acara";
import Category from "../../components/beranda/category";
import Hero from "../../components/beranda/hero";
import Card from "@/components/beranda/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";



export default function Home() {
  return (

    <div className="min-w-full">
      <Header/>
      <Hero />
      <Category />
      <Acara/>
      <Footer/>
    

    </div>
  );
}
