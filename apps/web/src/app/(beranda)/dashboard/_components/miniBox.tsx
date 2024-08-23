import { IconType } from 'react-icons';

interface IProps {
  svg: React.ReactNode;
  number: number;
  text: string;
}

export default function MiniBox({ svg, number, text }: IProps) {
  return (
    <div>
      <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl text-black">
        <div className="text-5xl text-[#32bc9b]">{svg}</div>
        <div className="flex flex-col">
          <p className="text-xl font-extrabold">{number}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
