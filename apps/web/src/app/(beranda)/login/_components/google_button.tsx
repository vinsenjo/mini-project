import { FcGoogle } from 'react-icons/fc';
export function GoogleLogin() {
  return (
    <button className="flex mt-3 lg:mt-0 justify-center items-center border-white  gap-2 bg-white lg:border-2 ml-4 md:ml-4 lg:ml-2 w-[300px] lg:w-[310px]  text-black py-2 rounded-full font-semibold hover:bg-black hover:text-white duration-100">
      <FcGoogle size={23} />
      Sign in with Google
    </button>
  );
}

export function GoogleSignUp() {
  return (
    <button className="flex  lg:mt-0 justify-center items-center border-white py-3 gap-2  lg:border-2 w-[300px]   lg:w-[500px] bg-black text-white  rounded-full font-semibold hover:bg-black hover:text-white duration-100">
      <FcGoogle size={23} />
      Sign in with Google
    </button>
  );
}