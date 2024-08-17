
import Link from "next/link"
export default function Hamburger({ state }: { state: boolean }) {
  return (
      <div
        className={`h-[200px] rounded-b-xl flex justify-center right-0 py-10 backdrop-blur-sm  bg-black/80 duration-75 z-10 top-[56px] lg:hidden absolute w-[200px] scroll-x ${
          state ? ' block' : ' hidden'
        }`}
      >
         <div className={`flex flex-col `}>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 rounded-full w-32  border-white border-2 bg-black hover:bg-[#FF7B4F] text-white hover:text-white"
              >
                Login
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
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
                className="btn m-1 rounded-full w-32 bg-white text-black hover:bg-[#FF7B4F] hover:text-white"
              >
                Hover
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
      </div>
    </div>
  );
}
