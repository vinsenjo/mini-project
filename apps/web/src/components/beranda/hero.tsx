import Image from "next/image";


export default function Hero() {
    return (
        <section className="lg:h-screen  Lg:w-screen">
            <Image className="relative lg:h-full h-[400px] w-full"
                src='/img/hero.jpeg'
                alt="home"
                width={300}
                height={100}/>
          <div className="content-center flex lg:left-[23%] left-[5%] flex-col items-center justify-center max-w-[800px] absolute lg:top-[300px] top-[100px]">
            <h1 className="set-0 p-4 flex flex-col text-center md:right-80  justify-between md:text-5xl text-3x1 text-white max-w-[600px] font-extrabold font-mono">Lorem ipsum dolor <span className="text-[#32BC9B]">Lorem ipsum dolor sit amet.</span></h1>
             <p className=" set-0 p-4 flex text-white justify-between  text-xl  text-center font-semibold font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita fugit explicabo quos mollitia provident! Sit dolores eligendi cum rem.</p>
          </div>
        </section>
    )
}