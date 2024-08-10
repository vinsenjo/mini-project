import Image from "next/image";

export default function Detailchek(){
    return(
        <section>
             <div className="flex pt-3 justify-center">
                        <Image className=""
                            src={'/img/sy2.jpeg'}
                            alt="pembayran"
                            width={100} 
                            height={200} />
                        <div className="gap-3 px-3 ">
                            <h3 className="font-bold ">Synchronize Fest</h3>
                            <p className="text-slate-600">Lapangan Persuasif Bandung </p>
                            <p className="text-slate-600">14 December 2024</p>
                            <p className="text-slate-600">14:00 - 22:00 WIB</p>
                        </div>
                    </div>
        </section>
    )
}