import Image from 'next/image';


export default function Hero() {
  return (
    <section className="lg:min-h-screen relative Lg:w-screen overflow-hidden  ">
      <div className="absolute lg:block hidden z-10 left-[2%] bottom-[5%] max-w-[700px]">
        <h1 className=" text-6xl font-bold text-white  ">
          Create Unforgettable <span className=' text-[#32bc9b]'>Moments With Us</span>
        </h1>
        <p className=' text-white pt-4 text-xl '>
          Make every event extraordinary with solutions tailored to craft
          experiences that will be remembered.
        </p>
      </div>
      <Image
        className="relative lg:h-full h-[400px] w-full  "
        src="/img/hero.jpg"
        alt="home"
        width={1920}
        height={1080}
      />
    </section>
  );
}
