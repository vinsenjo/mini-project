import Image from "next/image";

export default function Album() {
    return (
        <section className="bg-[#e1e1e1]">
            {/* album acara */}
            <div className="flex lg:flex-row flex-col gap-8 pb-10 justify-center px-10 rounded-sm">
                <Image className="hover:scale-105 duration-500"
                    src={'/img/sy1.jpeg'}
                    alt="album"
                    width={300}
                    height={300} />

                <Image className="hover:scale-105 duration-500"
                    src={'/img/sy3.jpeg'}
                    alt="album"
                    width={300}
                    height={300} />

                <Image className="hover:scale-105 duration-500"
                    src={'/img/sy2.jpeg'}
                    alt="album"
                    width={300}
                    height={300} />
            </div>
        </section>
    )
}