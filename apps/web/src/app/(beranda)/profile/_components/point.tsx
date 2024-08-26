import { getUser } from "@/libs/actions/user";

export default async function UserPoint(){
    const data = await getUser();
    const user = data.result.data
    return(
        <div className="bg-white flex border-0 justify-center py-3">
            <div className="flex flex-col justify-center py-2 px-4 items-center rounded-xl border-2 w-[50%] border-black text-black lg:w-[30%]">
                <h1 className="text-3xl text-black">Your Point</h1>
                <h2 className="text-2xl font-bold text-black">{user.point}</h2>
            </div>

        </div>
    )
}