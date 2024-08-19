import Link from "next/link";

interface IData {
    img: string;
    judul: string;
    tanggal: string;
    tempat: string;
    harga: number;
}


export default function Card() {
    const data: IData[] = [
        { img: '/img/Synchronize Fest.jpeg', judul: 'Synchronize Fest', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 299.512 },
        { img: '/img/jj3.jpeg', judul: 'Java Jazz', tanggal: 'Sat, Octa 19 • 20:00 PM', tempat: 'JX Internasional, Surabaya', harga: 799.512 },
        { img: '/img/so71.jpeg', judul: 'Hammersonic', tanggal: 'Sat, Dec 14 • 18:00 PM', tempat: 'Candi Prambanan', harga: 399.512 },
        { img: '/img/Synchronize Fest.jpeg', judul: 'Soundrenaline', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 0 },
        { img: '/img/Synchronize Fest.jpeg', judul: 'Soundrenaline', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 0 },
        { img: '/img/Synchronize Fest.jpeg', judul: 'Soundrenaline', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 0 },
        { img: '/img/Synchronize Fest.jpeg', judul: 'Soundrenaline', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 0 },
        { img: '/img/Synchronize Fest.jpeg', judul: 'Soundrenaline', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 0 },
        { img: '/img/Synchronize Fest.jpeg', judul: 'Soundrenaline', tanggal: 'Sat, Dec 14 • 14:00 AM', tempat: 'lapangan persuasif bandung', harga: 0 },
    ]
    
    return (
      
            <section className="">
                <div className="flex lg:flex-row lg:flex-wrap flex-col gap-4 lg:p-6 p-4 lg:mx-5  text-black">
                {data.map((item, key) => (
                    <div key={key} className="card card-compact bg-white w-[340px] shadow-xl rounded-2xl">
                        <figure>
                            <img
                                src={item.img}
                                alt="Music"
                                className="rounded-top-2xl hover:scale-110 duration-300" />
                        </figure>
                        <div className="card-body px-5 pt-3 pb-8">
                            <h2 className="card-title font-extrabold">{item.judul}</h2>
                            <p>{item.tanggal}</p>
                            <p className="text-slate-400">{item.tempat}</p>
                            <p className="text-red-700">{`IDR ${item.harga}`}</p>
                            <div className="card-actions flex justify-center pt-3">
                                <button className="btn btn-primary border-2 font-semibold border-slate-500 rounded-full bg-white text-black hover:border-[#FF7B4F] hover:bg-[#FF7B4F] hover:text-white h-9 w-full"><Link href="/detail" passHref >Detail</Link></button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

            </section>
      
    )
}