import Image from 'next/image';
export function LargeImage() {
  return (
    <div className="hidden lg:flex flex-col relative">
      <Image
        src={'/register.jpg'}
        width={1000}
        height={800}
        className="md:min-w-[600px] mt-2 md:relative rounded-2xl "
        alt="cosplay"
      />
      <div className="md:absolute hidden md:flex px- bg-opacity-65 rounded-2xl w-[500px] bottom-5 px-5 py-2 ">
        <h1 className="text-5xl font-black text-white ">
          Discover many <span className="text-[#32bc9b]">events</span> near you
        </h1>
      </div>
    </div>
  );
}
