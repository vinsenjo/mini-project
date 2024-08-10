import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-500">Hello World</h1>
      <Link href={'/login'} className="bg-violet-300 px-2 py-1">
        login
      </Link>
      <Link href={'/register'} className="bg-violet-300 px-2 py-1">
        register
      </Link>
    </div>
  );
}
