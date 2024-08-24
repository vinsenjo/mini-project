import {
  deleteCookie,
  getCookie,
  getData,
  navigate,
} from '@/libs/actions/server';
import Link from 'next/link';

export default async function ProfilePict() {
  const cookies = await getCookie('token');
  const data = await getData(cookies?.value!);

  return (
    <div className="bg-white w-max  hidden lg:flex justify-end">
      <div className={` ${cookies ? 'hidden' : 'lg:flex'}`}>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 rounded-full w-32  border-white border-2 hoverbg-black bg-[#FF7B4F] hover:text-white text-black"
          >
            Login
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black text-white rounded-box z-[1] w-32 p-2 shadow"
          >
            <li>
              <Link href={'/login'}>User</Link>
            </li>
            <li>
              <Link href={'/login-creator'}>EO</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 rounded-full w-32 bg-white text-black hover:border-0 hover:bg-black hover:text-white"
          >
            Register
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black text-white rounded-box z-[1] w-32 p-2 shadow"
          >
            <li>
              <Link href={'/register'}>User</Link>
            </li>
            <li>
              <Link href={'/register-creator'}>EO</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
