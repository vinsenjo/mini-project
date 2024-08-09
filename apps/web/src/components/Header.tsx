import Link from "next/link";

export const Header = () => {
  return (
    <section>
      <nav className=" bg-black sm:px-20 px-3 lg:py-5 py-2 top-1 flex flex-row justify-between items-center  ">
        <h1 className="text-white text-mono font-extrabold text-3xl"><Link href="/" passHref >X-ev</Link></h1>
        <div className="flex text-white  lg:gap-10 gap-5 ">
          <input type="search" placeholder="Search Event" className="md:w-[500px] w-[100px] h-[30px] focus:outline-none text-black " />
          <h1>Login</h1>
          <h1>Sign out</h1>
        </div>
      </nav>
    </section>
  )
};
