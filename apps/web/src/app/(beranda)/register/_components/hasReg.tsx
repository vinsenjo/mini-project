import Link from "next/link"
export default function HasReg(){
    return (
        <div className="flex mt-2">
              <p>already have an account ?</p>
              <Link href={"/login"} className="text-blue-500">Login</Link>
        </div>
    )
}