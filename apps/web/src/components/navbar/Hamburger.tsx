import { deleteCookie, getCookie, navigate } from '@/libs/actions/server';
import Link from 'next/link';
import { toast } from 'react-toastify';
export default function Hamburger(auth:boolean) {
  return (
    <div className={`block lg:hidden dropdown dropdown-end`}>
      <div tabIndex={0} role="button" className="btn m-1">
        Click
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
