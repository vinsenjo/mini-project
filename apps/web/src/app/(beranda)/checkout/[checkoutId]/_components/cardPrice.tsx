interface IProps {
  img: string;
  price: number | 0;
  title: string;
  type: string;
  point: number;
  seat: number;
  setPoint: any;
}
export default function CardPrice({
  img,
  price,
  title,
  type,
  point,
  seat,
  setPoint,
}: IProps) {
  const displayPoint = point >= 0 ? point : 0;
  return (
    <div className="card bg-white  lg:w-96 shadow-lg border-2 text-black ">
      <figure className="px-5 pt-5 flex flex-col gap-3">
        <h2 className="self-start text-3xl text-[#32bc9b] font-extrabold">
          {`${type} EVENT`}
        </h2>
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body pt-3   w-max text-start">
        <p className="text-xl ">{title}</p>
        <h2 className="card-title text-4xl font-extrabold">{`IDR. ${price ? price.toLocaleString() : 0}`}</h2>
        <div className="flex justify-between w-[70%] text-lg ">
          <p className="font-bold">Available Seat </p>
          <p className="place-self-end">{seat}</p>
        </div>
        <div className="flex items-center justify-start text-xl gap-3 border-2 py-2 border-[#32bc9b] rounded-xl px-5 mt-5">
          <p className="font-bold">Your Point : </p>
          <p>{displayPoint}</p>
          <button
            onClick={setPoint}
            className={`bg-[#FF7B4F] font-bold   px-4 py-1 rounded-full  ${price == 0 || displayPoint == 0 ? 'cursor-not-allowed ' : ' hover:bg-[#32bc9b] } duration-100'}`}
          >
            use
          </button>
        </div>
      </div>
    </div>
  );
}
