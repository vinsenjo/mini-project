import Image from "next/image";


export default function Hero() {
    return (
        <section className="lg:h-screen  Lg:w-screen overflow-hidden  ">
            <Image className="relative lg:h-full h-[400px] w-full  "
                src='/img/X-ev.png'
                alt="home"
                width={300}
                height={100}/>
        </section>
    )
}