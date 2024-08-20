'use client';
import { verifyEo } from '@/libs/actions/eo';
import { navigate } from '@/libs/actions/server';
import { verifyUser } from '@/libs/actions/user';
import { toast } from 'react-toastify';

export default function VerifyPageEo({
  params,
}: {
  params: { token: string };
}) {
  const onVerify = async (token: string) => {
    try {
      const { result, ok } = await verifyEo(token);
      if (!ok) throw result.msg;
      toast.info(result.msg);
      navigate('/');
    } catch (err) {
      toast.error(err as string);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-3 min-h-screen min-w-screen justify-center items-center">
      <h1 className="text-white font-bold text-xl">Verification</h1>
      <button
        onClick={() => onVerify(params.token)}
        className="bg-[#FF7B4F] text-black hover:scale-110 duration-100 rounded-lg p-2 hover:bg-black hover:text-white font-semibold  w-[200px]"
      >
        Verify My Account
      </button>
    </div>
  );
}
