import FormikRegisterEo from './formikRegisterEo';

export default function RegisterBox() {
  return (
    <div className="border-2 py-2 px-5 flex flex-col justify-center items-center gap-5 rounded-lg">
      <h1 className="text-black font-semibold text-3xl">Register as Creator</h1>
      <FormikRegisterEo />
    </div>
  );
}
