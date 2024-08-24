interface IProps {
  token: string;
  role: string;
  logOut: any;
}

export default function UserAvatar({ token, role, logOut }: IProps) {
  return (
    <div className={`${token && role == 'user' ? 'flex' : 'hidden'}   `}>
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
            <a href="/" className="hover:bg-[#FF7B4F]">
              Beranda
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:bg-[#FF7B4F]">
              Profile
            </a>
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
