import Album from '@/components/detail/album';
import InfoEvent from '@/components/detail/info';
import Modal from '@/components/detail/modal';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Navbar from '@/components/navbar/Navbar';
export default function Detail() {
  return (
    <section>
      <Navbar />
      <InfoEvent />
      <Modal />
      <Album />
      <Footer />
    </section>
  );
}
