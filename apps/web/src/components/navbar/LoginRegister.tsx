import { getCookie } from '@/libs/actions/server';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function LoginRegister({ token }: { token: string }) {
  // const cookies = getCookie('token');
  return (
    <div className={` ${token ? 'hidden' : 'flex lg:hidden'} justify-end`}>
      <div className="dropdown  dropdown-end">
        <div tabIndex={0} role="button" className="btn bg-black m-1">
          <GiHamburgerMenu className="text-white " />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-black text-white rounded-box z-[1] w-52 p-2 shadow gap-2"
        >
          {/* login */}
          <li>
            <button
              className="btn bg-black text-white hover:bg-white hover:text-black border-white"
              onClick={() =>
                (
                  document.getElementById('my_modal_1') as HTMLDialogElement
                ).showModal()
              }
            >
              LOGIN
            </button>
            <dialog id="my_modal_1" className="modal ml-7 mt-40 modal-middle">
              <div className="modal-box min-w-[300px] bg-black text-white">
                <h3 className="font-bold text-lg">Hello!</h3>

                <h3>Welcome Back, Please Login</h3>

                <div className="flex justify-around  mt-5">
                  <Link
                    href={'/login'}
                    className="bg-white text-black py-2 px-5 rounded-xl font-semibold"
                  >
                    User
                  </Link>
                  <Link
                    href={'/login-creator'}
                    className="bg-white text-black py-2 px-5 rounded-xl font-semibold"
                  >
                    EO
                  </Link>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
          {/* register */}
          <li>
            <button
              className="btn bg-black text-white hover:bg-white hover:text-black border-white"
              onClick={() =>
                (
                  document.getElementById('my_modal_2') as HTMLDialogElement
                ).showModal()
              }
            >
              Register
            </button>
            <dialog id="my_modal_2" className="modal ml-7 mt-40 modal-middle">
              <div className="modal-box min-w-[300px] bg-black text-white">
                <h3 className="font-bold text-lg">Hello!</h3>

                <h3>Welcome, Please Register</h3>

                <div className="flex justify-around  mt-5">
                  <Link
                    href={'/register'}
                    className="bg-white text-black py-2 px-5 rounded-xl font-semibold"
                  >
                    User
                  </Link>
                  <Link
                    href={'/register-creator'}
                    className="bg-white text-black py-2 px-5 rounded-xl font-semibold"
                  >
                    EO
                  </Link>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
        </ul>
      </div>
    </div>
  );
}
