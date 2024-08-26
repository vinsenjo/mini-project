import Link from 'next/link';
interface IProps {
  token: string;
  role: string;
  logOut: any;
}

export default function EoAvatar({ token, role, logOut }: IProps) {
  return (
    <div className={`${token && role == 'eo' ? 'flex' : 'hidden'} `}>
      <div className={`dropdown dropdown-hover   dropdown-end`}>
        <div className={`avatar`}>
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-black text-white rounded-box z-[1] w-32 p-2 shadow gap-2"
        >
          <li>
            <Link className="hover:bg-[#FF7B4F]" href={'/'}>
              {' '}
              Beranda
            </Link>
            {/* <a  className="hover:bg-[#FF7B4F]">
              Dashboard
            </a> */}
          </li>
          <li>
            <Link className="hover:bg-[#FF7B4F]" href={'/dashboard'}>
              {' '}
              Dashboard
            </Link>
            {/* <a  className="hover:bg-[#FF7B4F]">
              Dashboard
            </a> */}
          </li>
          <li>
            <a onClick={logOut} className="hover:bg-[#FF7B4F]">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
