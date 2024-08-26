interface IProps {
  info: string;
  value: string;
  icon: any;
}
export default function Info({ value, info, icon }: IProps) {
  return (
    <div className="grid px-2 grid-cols-2 text-lg lg:text-2xl my-3 text-black max-w-[80%]">
      <div className="flex gap-2 items-center justify-start  col-span-1">
        <p>{icon}</p>
        <p className="font-bold">{info}</p>
      </div>
      <p className="">{value}</p>
    </div>
  );
}
