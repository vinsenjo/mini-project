import Acara from '@/components/beranda/acara';
import Category from '../../components/beranda/category';
import Hero from '../../components/beranda/hero';
import Card from '@/components/beranda/card';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div className="min-w-full">
      <Navbar />
      <Hero />
      <Category />
      <Acara />
      <Card />
      <Footer />
    </div>
  );
}
